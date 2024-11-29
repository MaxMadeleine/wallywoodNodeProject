import { supabase } from "../config/configSupabase.js";

export class GenresModel {
    async getAllRecords() {
        try {
            const { data, error } = await supabase.from("genres").select("*");
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from("genres")
                .select("*")
                .eq("id", id)
                .single();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async createRecord(formData) {
        try {
            const { data, error } = await supabase
                .from("genres")
                .insert([{
                    id: formData.id,
                    title: formData.title,
                    slug: formData.slug
                }])
                .select();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async updateRecord(formData) {
        try {
            const { data, error } = await supabase
                .from("genres")
                .update({
                    title: formData.title,
                })
                .eq("id", formData.id)
                .select();
            if (error) {
                throw new Error(error.message);
            }
            return data;
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }

    async deleteRecord(id) {
        try {
            const { data, error } = await supabase
                .from("genres")
                .delete()
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return { message: "Genre deleted successfully" };
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }
}

export const genresModel = new GenresModel();

