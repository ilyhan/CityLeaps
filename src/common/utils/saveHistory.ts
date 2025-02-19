export const saveToHistory = (city1: string, city2: string, distance: number) => {
    const historyKey = 'distanceHistory';
    const history = JSON.parse(sessionStorage.getItem(historyKey) || '[]') as string[];

    const newRecord = `${city1} - ${city2}: ${distance} км`;

    if (history.indexOf(newRecord) === -1) {
        history.unshift(newRecord); 
        
        if (history.length > 10) {
            history.pop();
        }

        sessionStorage.setItem(historyKey, JSON.stringify(history));
    }
};