import { supabase } from "../config/configSupabase.js";

export class UserRatingsModel {
    async getAllRecords() {
        try {
            const { data, error } = await supabase.from("user_ratings").select("*");
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
                .from("user_ratings")
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
                .from("user_ratings")
                .insert([{
                    user_id: formData.user_id,
                    poster_id: formData.poster_id,
                    rating: formData.rating,
                    comment: formData.comment
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
                .from("user_ratings")
                .update({
                    rating: formData.rating,
                    comment: formData.comment
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
                .from("user_ratings")
                .delete()
                .eq("id", id);
            if (error) {
                throw new Error(error.message);
            }
            return { message: "User rating deleted successfully" };
        } catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    }
}

export const userRatingsModel = new UserRatingsModel(); 