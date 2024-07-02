import { sessionLogin } from "../utils/session";
import useSWRMutation from "swr/mutation";

const sessionLoginRoute = "https://0583-2804-14c-bf34-8dde-c192-7317-31cb-fd52.ngrok-free.app/api";

async function LOGIN(path: string, payload: Object) {
    const urlData = `${path}`;
  
    const res = await fetch(urlData, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  
    return res;
  }

async function doLogin(url: string, { arg }: { arg: { email: string, password: string, cpf: string }}) {
  const userData: { email: string, password: string, cpf: string} = {
    "email": arg.email,
    "password": arg.password,
    "cpf": arg.cpf
  };

  const resp = await LOGIN(url, userData);

  if (!resp.ok) {
    const error = new Error("Usuário ou senha inválidos");
    throw error;
  }

  const data = await resp.json();
  
  sessionLogin(data.token);
  
  return data;
}

export default function useSession() {

  const { trigger: login } = useSWRMutation(`${sessionLoginRoute}/auth/login`, doLogin, {
    // the login route already provides the updated information, no need to revalidate
    revalidate: false,
  });

  return {
    login,
  };
}