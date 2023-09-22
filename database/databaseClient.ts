import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {DATABASE_URL, DATABASE_KEY} from '@env';

const databaseUrl = DATABASE_URL || '';
const databaseKey = DATABASE_KEY || '';

export const databaseClient = createClient(databaseUrl, databaseKey);
