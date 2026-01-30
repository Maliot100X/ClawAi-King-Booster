import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function logTaskEvent(userId: string, taskName: string, details: any) {
    await supabase.from('bot_events').insert({
        user_id: userId,
        task_name: taskName,
        details,
        created_at: new Date(),
    });
}
