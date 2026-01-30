export interface AIProvider {
    name: string;
    processRequest(task: any): Promise<any>;
}
