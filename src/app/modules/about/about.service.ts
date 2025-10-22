import { prisma } from "../../config/db";
import { Prisma } from "@prisma/client";
import { IAboutPayload } from "./about.type";

const createAbout = async (payload: IAboutPayload) => {
    const createAbout = await prisma.about.create({
        data: {
            title: payload.title,
            description: payload.description,
            image: payload.image,
            cv_link: payload.cv_link,
            skills: {
                connect: payload.skills?.map((id: number) => ({ id })) || [],
            },
            educations: {
                connect: payload.educations?.map((id: number) => ({ id })) || [],
            },
            experiences: {
                connect: payload.experiences?.map((id: number) => ({ id })) || [],
            },
        },
    })
    return createAbout
}
const getAbout = async () => {
    const getAbout = await prisma.about.findMany({
        include: {
            skills: true,
            educations: true,
            experiences: true,
        },
    })

    return getAbout
}

const deleteAbout = async (id: number) => {
    const deleteAbout = await prisma.about.delete({
        where: { id }
    })
    return deleteAbout
}
const updateAbout = async (id: number, payload: IAboutPayload) => {
    const updateAbout = await prisma.about.update({
        where: { id },
        data: {
            title: payload.title,
            description: payload.description,
            image: payload.image,
            cv_link: payload.cv_link,
            skills: {
                connect: payload.skills?.map((id: number) => ({ id })) || [],
            },
            educations: {
                connect: payload.educations?.map((id: number) => ({ id })) || [],
            },
            experiences: {
                connect: payload.experiences?.map((id: number) => ({ id })) || [],
            },
        },
    });
    return updateAbout
}

export const AboutServices = {
    createAbout,
    getAbout,
    deleteAbout,
    updateAbout
};
