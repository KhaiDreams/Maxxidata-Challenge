export function IsUUID (id: string): boolean {
    const isValid = id.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');

    if(isValid) {
        return true;
    } else {
        return false;
    }
}