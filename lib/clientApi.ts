import { NotesResponse } from "@/types/api";
import { api } from "./api";
import { Note } from "@/types/note";

export const fetchNotes = async (
  page = 1,
  perPage = 10,
  tag: string | null = null,
  search: string = "",
) => {
  const res = await api.get<NotesResponse>(`/notes`, {
    params: {
      page,
      perPage,
      tag: tag || undefined,
      search: search || undefined,
    },
  });
  return res.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const res = await api.get<Note>(`/notes/${id}`, {});
  return res.data;
};

export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}) => {
  const res = await api.post<Note>(`/notes`, note, {});
  return res.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const res = await api.delete<Note>(`/notes/${id}`, {});
  return res.data;
};
