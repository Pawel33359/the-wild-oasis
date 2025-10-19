import supabase, { supabaseUrl } from "./supabase";

export async function getCabins(){
    const { data, error } = await supabase.from('cabins').select('*');
    if(error){
        console.error(error);
        throw new Error("Cabins could not be loaded")
    }

    return data;
}

export async function createEditCabin(newCabin, id){
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll("/", "");
    const imagePath = hasImagePath || !newCabin.image ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    //https://jxanprnhzlrromuxiuwr.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

    let query = supabase.from("cabins");
    // A. Create cabin
    if(!id){
        query = query.insert([{...newCabin, image: imagePath}]);
    }
    // B. Edit cabin
    if(id){
        query = query.update({...newCabin, image: imagePath}).eq("id", id);
    }
    
    const { data, error } = await query.select().single();
    if(error){
        console.error(error);
        throw new Error(id ? "Cabins could not be edited" : "Cabins could not be created")
    }

    if(!hasImagePath){
        // Upload image
        const { error: storageError } = await supabase.storage.from("cabin-images").upload(imageName, newCabin.image)
    
        // delete the cabin if there was an error uploading image
        if(storageError){
            await deleteCabin(data.id);
            console.error(storageError)
            throw new Error("Cabin could not be created")
        }
    }

    return data;
}

export async function deleteCabin(id){
    const { data, error } = await supabase.from('cabins').delete().eq("id", id);
    if(error){
        console.error(error);
        throw new Error("Cabin could not be deleted")
    }

    return data;
}