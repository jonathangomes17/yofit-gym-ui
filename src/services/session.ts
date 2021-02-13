export function isLogged(): boolean {
    return !!getSession();
}

export function setSession(token: string): void {
    localStorage.setItem('session', token);
}

export function unsetSession(): void {
    localStorage.removeItem('session');
}

export function getSession(): string | null {
    return localStorage.getItem('session');
}
