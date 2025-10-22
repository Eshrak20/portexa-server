// Define your request payload type
export interface IAboutPayload {
    title: string;
    description: string;
    image: string;
    cv_link: string;
    skills?: number[];
    educations?: number[];
    experiences?: number[];
}
