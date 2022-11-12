import { memberListType, } from "./members-list-type";

// Get initialTeamMembers from the DB
const MockInitialTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

// Get currentTeamMembers from the DB
const MockCurrentTeamMembers: memberListType = [{ name: 'Vincent' },
{ name: 'Kevin' }, { name: 'Jean' }, { name: 'Jean-Christophe' }, { name: 'Hakima' }, { name: 'Aya' }, { name: 'Virgil' }, { name: 'Stéphane' }, { name: 'Wendy' }, { name: 'Oum' }, { name: 'Jeremy' }, { name: 'Claudia' }];

const MockBeginingTimer: number = 0;
const MockEndingTimer: number = 24 * 60;
const MockCurrentDate: Date = new Date;
const convertToMinute = (date: Date): number => { return (MockCurrentDate.getHours() * 60) + MockCurrentDate.getMinutes() + (MockCurrentDate.getSeconds() / 60); }

export { MockInitialTeamMembers, MockCurrentTeamMembers, MockBeginingTimer, MockEndingTimer, MockCurrentDate, convertToMinute }