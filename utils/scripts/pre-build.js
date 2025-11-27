// pre-build.js - Runs Supabase DB push before Next.js build
require('dotenv').config();

console.log('Running pre-build script...');

// Get the DB URL from environment variables
const supabaseDbUrl = process.env.SUPABASE_DB_URL;

// Only attempt DB push if we have a DB URL
if (supabaseDbUrl) {
  console.log('Running Supabase DB push...');
  const { execSync } = require('child_process');
  
  try {
    // Run the Supabase DB push command
    execSync(`supabase db push --db-url="${supabaseDbUrl}"`, { 
      stdio: 'inherit',
      encoding: 'utf-8'
    });
    console.log('Supabase DB push completed successfully');
  } catch (error) {
    // If tables already exist, continue with build
    if (error.message && error.message.includes('relation') && error.message.includes('already exists')) {
      console.log('Some relations already exist, continuing build process...');
    } else {
      console.error('Error running Supabase DB push:', error);
      process.exit(1);
    }
  }
} else {
  console.log('SUPABASE_DB_URL not set, skipping DB push');
}

console.log('Pre-build script completed');
