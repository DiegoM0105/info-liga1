import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://ozdjkablmlroymsrqmvk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96ZGprYWJsbWxyb3ltc3JxbXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MTc0MTMsImV4cCI6MjAyNjI5MzQxM30.E_yAxZMysWYCmnYHXfgh5g1l43tDTCBk-rVxxDWi_1c'

export const supabase = createClient(supabaseURL, supabaseKey)