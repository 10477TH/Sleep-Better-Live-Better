export interface TeamMember {
  id: string;
  name: string;
  initial: string;
  avatarBg: string;
  avatarText: string;
}

export const PROJECT_CONFIG = {
  projectName: 'Sleep Better, Live Better',
  slogan: 'Better Sleep. Better Health. Better Life.',
  gradeLevel: 'M.3 Student-Led Community Health Project',
  schoolName: 'Phuketthaihua Aseanwittaya',
  teacherAdvisor: 'Teacher Sasi',
  teamMembers: [
    {
      id: 'thanwarin',
      name: 'Thanwarin',
      initial: 'T',
      avatarBg: '#302044',
      avatarText: '#E9C75B',
    },
    {
      id: 'nittanet',
      name: 'Nittanet',
      initial: 'N',
      avatarBg: '#E9C75B',
      avatarText: '#29242F',
    },
    {
      id: 'akira',
      name: 'Akira',
      initial: 'A',
      avatarBg: '#C994A8',
      avatarText: '#29242F',
    },
  ] as TeamMember[],
};
