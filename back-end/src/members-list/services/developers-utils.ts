import { calculateNombreDeletionTheoricType } from "./members-list-type";
import { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, convertToMinute } from "./members-list-mock";

export const getInfo = (): string => {
    const MockCurrentDate = new Date;
    const nombreDeletionActuel = MockInitialTeamMembers.length - MockCurrentTeamMembers.length;
    const timeDeletion = ((MockEndingTimer - MockBeginingTimer) / (MockInitialTeamMembers.length - 1));
    const nombreDeletionTheoric = calculateNombreDeletionTheoric({
        initialList: MockInitialTeamMembers,
        beginingTimer: MockBeginingTimer, currentTimer: convertToMinute(MockCurrentDate), timeDeletion: timeDeletion
    });
    return ("NombreDelationToDo  = " + (nombreDeletionTheoric - nombreDeletionActuel) + " ->  nombreDeletionTheoric(" + nombreDeletionTheoric + ") - "
        + "nombreDeletionActuel(" + nombreDeletionActuel + ")");
}


const calculateNombreDeletionTheoric = ({ initialList, beginingTimer, currentTimer, timeDeletion }: calculateNombreDeletionTheoricType): number => {
    const nombreDeletionTheoric = Math.floor(((currentTimer - beginingTimer) / timeDeletion));
    const finalNombreDeletionTheoric = nombreDeletionTheoric > (initialList.length - 1) ? (initialList.length - 1) : nombreDeletionTheoric;
    return finalNombreDeletionTheoric;
}