export interface IProjectRequest{
    name: string;
    image_url: string;
    link_repo: string;
    link_page: string;
}
export interface IProjectUpdate{
    name?: string;
    image_url?: string;
    link_repo?: string;
    link_page?: string;
}