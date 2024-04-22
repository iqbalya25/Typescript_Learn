export function differentDate (date1: string, date2: string): number{
    const date1Obj: Date = new Date(date1);
    const date2Obj: Date = new Date(date2);
    const diffTime: number = date2Obj.getTime() - date1Obj.getTime();
    const diffDays: number = Math.floor(diffTime / (1000 * 3600 * 24));
    
    return diffDays;
}
