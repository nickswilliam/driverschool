export function formatTimeDifference(milliseconds: number): string {
    const currentDate = new Date();
    const inputDate = new Date(milliseconds);
    const diffMilliseconds = currentDate.getTime() - inputDate.getTime();
  
    const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
    const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const diffMonths = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 30.44)); // promedio de 30.44 días en un mes
    const diffYears = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); // año promedio incluyendo años bisiestos
  
    if (diffMinutes < 60) {
      return `${diffMinutes} min`;
    } else if (diffHours < 24) {
      if(diffHours>1){
        return `${diffHours} hs`;
      } else {
        return `${diffHours} h`;
      }
    } else if (diffDays < 7) {
      if(diffDays>1){
        return `${diffDays} días`;
      } else {
        return `${diffDays} día`;
      }
    } else if (diffWeeks < 4) {
      if(diffWeeks>1){
        return `${diffWeeks} semanas`;
      } else {
        return `${diffWeeks} semana`;
      }
    } else if (diffMonths < 12) {
        if(diffMonths>1){
            return `${diffMonths} meses`
        } else {
            return `${diffMonths} mes`
        }
    } else {
      if(diffYears>1){
        return `${diffYears} años`;
      } else {
        return `${diffYears} años`;
      }
    }
  }
  