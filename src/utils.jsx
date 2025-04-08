export const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    if (isNaN(date)) return 'Unknown Date';
  
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };
  