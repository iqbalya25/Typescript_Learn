export function getNameInitials(fullName: string): string {
    // Split the full name into individual words
    const nameWords: string[] = fullName.split(' ');
    
    // Initialize an empty string to store initials
    let initials: string = '';
    
    // Iterate through each word in the name
    nameWords.forEach(word => {
        // Append the first character of each word to initials
        initials += word.charAt(0);
    });
    
    // Convert the initials to uppercase
    initials = initials.toUpperCase();
    
    return initials;
}