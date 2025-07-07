import { neon } from '@neondatabase/serverless';

export const fetchUploads = async () => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  try {
    const result = await sql(`SELECT * FROM videos ORDER BY category ASC, title ASC`);
    return result;
  } catch (error) {
    console.error('Error fetching uploads:', error);
    throw new Error('Failed to fetch data from the database.');
  }
};

export const fetchHero = async () => {
    const sql = neon(`${process.env.DATABASE_URL}`);
    try {
      const result = await sql(`SELECT * FROM herovideos ORDER BY title ASC`);
      return result;
    } catch (error) {
      console.error('Error fetching uploads:', error);
      throw new Error('Failed to fetch data from the database.');
    }
  };
