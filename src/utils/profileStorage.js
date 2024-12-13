// Utility functions for profile management
export const saveProfile = (profileData) => {
    localStorage.setItem('userProfile', JSON.stringify(profileData));
  };
  
  export const getProfile = () => {
    const profile = localStorage.getItem('userProfile');
    return profile ? JSON.parse(profile) : null;
  };
  
  export const updateProfile = (updates) => {
    const currentProfile = getProfile();
    const updatedProfile = { ...currentProfile, ...updates };
    saveProfile(updatedProfile);
    return updatedProfile;
  };