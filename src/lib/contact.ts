interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: 'careseeker' | 'caregiver';
}

interface CareseekerSubmission {
  dateOfBirth: string;
  emergencyContact: string;
  preferredCommunication: string;
  supportNeeds: string;
}

interface CaregiverSubmission {
  organizationName: string;
  contactName: string;
  role: string;
  specialization: string;
  experienceYears: number;
  additionalInfo?: string;
  supportNeeds: string;
}

// Local storage keys
const CONTACT_SUBMISSIONS_KEY = 'ilight_contact_submissions';
const CARESEEKER_SUBMISSIONS_KEY = 'ilight_careseeker_submissions';
const CAREGIVER_SUBMISSIONS_KEY = 'ilight_caregiver_submissions';

// Helper to get stored data
const getStoredData = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Helper to save data
const saveData = <T>(key: string, data: T[]): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export async function submitContactForm(
  contactData: ContactSubmission,
  submissionData: CareseekerSubmission | CaregiverSubmission
) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Get existing submissions
  const contactSubmissions = getStoredData<any>(CONTACT_SUBMISSIONS_KEY);
  
  // Create new submission with ID
  const submissionId = `submission_${Math.random().toString(36).substring(2, 11)}`;
  const newContactSubmission = {
    id: submissionId,
    first_name: contactData.firstName,
    last_name: contactData.lastName,
    email: contactData.email,
    phone: contactData.phone,
    user_type: contactData.userType,
    created_at: new Date().toISOString()
  };
  
  // Save contact submission
  contactSubmissions.push(newContactSubmission);
  saveData(CONTACT_SUBMISSIONS_KEY, contactSubmissions);
  
  // Save type-specific submission
  if (contactData.userType === 'careseeker') {
    const careseekerData = submissionData as CareseekerSubmission;
    const careseekerSubmissions = getStoredData<any>(CARESEEKER_SUBMISSIONS_KEY);
    
    const newCareseekerSubmission = {
      id: `careseeker_${Math.random().toString(36).substring(2, 11)}`,
      submission_id: submissionId,
      date_of_birth: careseekerData.dateOfBirth,
      emergency_contact: careseekerData.emergencyContact,
      preferred_communication: careseekerData.preferredCommunication,
      support_needs: careseekerData.supportNeeds,
      created_at: new Date().toISOString()
    };
    
    careseekerSubmissions.push(newCareseekerSubmission);
    saveData(CARESEEKER_SUBMISSIONS_KEY, careseekerSubmissions);
  } else {
    const caregiverData = submissionData as CaregiverSubmission;
    const caregiverSubmissions = getStoredData<any>(CAREGIVER_SUBMISSIONS_KEY);
    
    const newCaregiverSubmission = {
      id: `caregiver_${Math.random().toString(36).substring(2, 11)}`,
      submission_id: submissionId,
      organization_name: caregiverData.organizationName,
      contact_name: caregiverData.contactName,
      role: caregiverData.role,
      specialization: caregiverData.specialization,
      experience_years: caregiverData.experienceYears,
      additional_info: caregiverData.additionalInfo,
      support_needs: caregiverData.supportNeeds,
      created_at: new Date().toISOString()
    };
    
    caregiverSubmissions.push(newCaregiverSubmission);
    saveData(CAREGIVER_SUBMISSIONS_KEY, caregiverSubmissions);
  }
  
  return newContactSubmission;
}