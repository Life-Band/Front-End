import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const URL_BACKEND = "https://bfdd-2804-14c-bf34-8dde-f46a-a0f-38c-e813.ngrok-free.app/api";

async function fetcher(url: string) {
    const resp = await fetch(`${url}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true", 
            "User-Agent": "MyCustomUserAgent/1.0" 
        },
    });

    if (!resp.ok) {
        const error = new Error("Não foi possível buscar os usuários");
        throw error;
    }

    return resp.json();
}

export default function useUsers() {
	const { data, mutate, error, isLoading } = useSWR(URL_BACKEND,
		fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false
	});

    if (error) {
		console.error("Erro ao buscar os usuários", error);
	}

	return {
		data,
		mutate,
		error,
		isLoading,
	};
}
