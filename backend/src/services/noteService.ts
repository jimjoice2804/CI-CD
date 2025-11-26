import { prisma } from "../lib/prisma.js"

export const fetchAllNotesService = () => prisma.note.findMany();

export const fetchNoteByIdService = (id: number) =>
    prisma.note.findUnique({ where: { id } });

export const updateNoteService = (id: number, data: { title?: string; content?: string }) =>
    prisma.note.update({ where: { id }, data });

export const deleteNoteService = (id: number) =>
    prisma.note.delete({ where: { id } });

export const createNoteService = (data: { title: string; content: string }) =>
    prisma.note.create({ data });