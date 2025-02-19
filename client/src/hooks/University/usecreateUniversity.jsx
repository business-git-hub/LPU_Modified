import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { createUniversity } from '../../stores/actions/universityActions';
import { useState, useEffect } from 'react';
import { fetchUniversities } from '../../stores/actions/universityActions';
import useGetAllUniversities from './usegetAllUniversities';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useCreateUniversity() {
    const dispatch = useDispatch();
    const { page, limit, search } = useGetAllUniversities()
    const [error, setError] = useState(null);
    const { isUniversityPosting, universityError } = useSelector((state) => state.university); // Redux state
    const [isFormData, setFormData] = useState(
        {
            identity: {
                name: '',
                nativeName: '',
                acronym: '',
                founded: new Date().getFullYear(),
                colors: ['', ''],
            },
            location: {
                address: '',
                city: '',
                state: '',
                postalCode: '',
                country: '',
                phone: '',
                fax: '',
                website: '',
                email: '',
            },
            sizeAndProfile: {
                studentEnrollment: { min: 0, max: 0 },
                academicStaff: { min: 0, max: 0 },
                controlType: 'Private',
                academicCalendar: 'Semester',
                campusSetting: 'Urban',
                religiousAffiliation: 'None',
            },
            admissions: {
                gender: 'Coed',
                internationalStudents: false,
                selectionType: 'Selective',
                admissionRate: { min: 0, max: 0 }
            },
            tuitionFees: {
                undergraduate: {
                    local: { min: 0, max: 0 },
                    international: { min: 0, max: 0 }
                },
                postgraduate: {
                    local: { min: 0, max: 0 },
                    international: { min: 0, max: 0 }
                }
            },
            accreditations: {
                institutional: '',
                specialized: [],
                firstAccreditationYear: 0
            },
            facilitiesAndServices: {
                library: false,
                housing: false,
                sportFacilities: false,
                financialAids: false,
                studyAbroad: false,
                distanceLearning: false,
                academicCounseling: false,
                careerServices: false,
                institutionalHospital: false
            },
            media: {
                images: [{ file: undefined }],
            },
        });
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
        getValues,
        trigger,
    } = useForm(
        {
            mode: 'onBlur',
            defaultValues: {
                identity: {
                    name: '',
                    nativeName: '',
                    acronym: '',
                    founded: new Date().getFullYear(),
                    colors: ['', ''],
                },
                location: {
                    address: '',
                    city: '',
                    state: '',
                    postalCode: '',
                    country: '',
                    phone: '',
                    fax: '',
                    website: '',
                    email: '',
                },
                sizeAndProfile: {
                    studentEnrollment: { min: 0, max: 0 },
                    academicStaff: { min: 0, max: 0 },
                    controlType: 'Private',
                    academicCalendar: 'Semester',
                    campusSetting: 'Urban',
                    religiousAffiliation: 'None',
                },
                admissions: {
                    gender: 'Coed',
                    internationalStudents: false,
                    selectionType: 'Selective',
                    admissionRate: { min: 0, max: 0 }
                },
                tuitionFees: {
                    undergraduate: {
                        local: { min: 0, max: 0 },
                        international: { min: 0, max: 0 }
                    },
                    postgraduate: {
                        local: { min: 0, max: 0 },
                        international: { min: 0, max: 0 }
                    }
                },
                accreditations: {
                    institutional: '',
                    specialized: [],
                    firstAccreditationYear: 0
                },
                facilitiesAndServices: {
                    library: false,
                    housing: false,
                    sportFacilities: false,
                    financialAids: false,
                    studyAbroad: false,
                    distanceLearning: false,
                    academicCounseling: false,
                    careerServices: false,
                    institutionalHospital: false
                },
                media: {
                    images: [{ file: undefined }],
                },
                description: ''
            }
        }
    );
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    // Function to handle form submission
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("identity[name]", data.identity.name)
        formData.append("identity[nativeName]", data.identity.nativeName)
        formData.append("identity[acronym]", data.identity.acronym)
        formData.append("identity[founded]", data.identity.founded)
        formData.append("identity[colors][]", data.identity.colors[0])
        formData.append("identity[colors][]", data.identity.colors[1])
        formData.append("location[address]", data.location.address)
        formData.append("location[city]", data.location.city)
        formData.append("location[state]", data.location.state)
        formData.append("location[postalCode]", data.location.postalCode)
        formData.append("location[country]", data.location.country)
        formData.append("location[phone]", data.location.phone)
        formData.append("location[fax]", data.location.fax)
        formData.append("location[website]", data.location.website)
        formData.append("location[email]", data.location.email)
        formData.append("sizeAndProfile[studentEnrollment][min]", data.sizeAndProfile.studentEnrollment.min)
        formData.append("sizeAndProfile[studentEnrollment][max]", data.sizeAndProfile.studentEnrollment.max)
        formData.append("sizeAndProfile[academicStaff][min]", data.sizeAndProfile.academicStaff.min)
        formData.append("sizeAndProfile[academicStaff][max]", data.sizeAndProfile.academicStaff.max)
        formData.append("sizeAndProfile[controlType]", data.sizeAndProfile.controlType)
        formData.append("sizeAndProfile[academicCalendar]", data.sizeAndProfile.academicCalendar)
        formData.append("sizeAndProfile[campusSetting]", data.sizeAndProfile.campusSetting)
        formData.append("sizeAndProfile[religiousAffiliation]", data.sizeAndProfile.religiousAffiliation)
        formData.append("admissions[gender]", data.admissions.gender)
        formData.append("admissions[internationalStudents]", data.admissions.internationalStudents)
        formData.append("admissions[selectionType]", data.admissions.selectionType)
        formData.append("admissions[admissionRate][min]", data.admissions.admissionRate.min)
        formData.append("admissions[admissionRate][max]", data.admissions.admissionRate.max)
        formData.append("tuitionFees[undergraduate][local][min]", data.tuitionFees.undergraduate.local.min)
        formData.append("tuitionFees[undergraduate][local][max]", data.tuitionFees.undergraduate.local.max)
        formData.append("tuitionFees[undergraduate][international][min]", data.tuitionFees.undergraduate.international.min)
        formData.append("tuitionFees[undergraduate][international][max]", data.tuitionFees.undergraduate.international.max)
        formData.append("tuitionFees[postgraduate][local][min]", data.tuitionFees.postgraduate.local.min)
        formData.append("tuitionFees[postgraduate][local][max]", data.tuitionFees.postgraduate.local.max)
        formData.append("tuitionFees[postgraduate][international][min]", data.tuitionFees.postgraduate.international.min)
        formData.append("tuitionFees[postgraduate][international][max]", data.tuitionFees.postgraduate.international.max)
        formData.append("accreditations[institutional]", data.accreditations.institutional)
        data.accreditations.specialized.map((specialized) => {
            formData.append("accreditations[specialized][]", specialized)
        })
        formData.append("accreditations[firstAccreditationYear]", data.accreditations.firstAccreditationYear)
        formData.append("facilitiesAndServices[library]", data.facilitiesAndServices.library ? true : false)
        formData.append("facilitiesAndServices[housing]", data.facilitiesAndServices.housing ? true : false)
        formData.append("facilitiesAndServices[sportFacilities]", data.facilitiesAndServices.sportFacilities ? true : false)
        formData.append("facilitiesAndServices[financialAids]", data.facilitiesAndServices.financialAids ? true : false)
        formData.append("facilitiesAndServices[studyAbroad]", data.facilitiesAndServices.studyAbroad ? true : false)
        formData.append("facilitiesAndServices[distanceLearning]", data.facilitiesAndServices.distanceLearning ? true : false)
        formData.append("facilitiesAndServices[academicCounseling]", data.facilitiesAndServices.academicCounseling ? true : false)
        formData.append("facilitiesAndServices[careerServices]", data.facilitiesAndServices.careerServices ? true : false)
        formData.append("facilitiesAndServices[institutionalHospital]", data.facilitiesAndServices.institutionalHospital ? true : false)
        formData.append("description", data.description)
        isFormData.media.images.map((image) => {
            formData.append("images", image.file)
        });
        // console.log(Object.fromEntries(formData.entries()));
            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        try {
            setError(null); // Reset the error state before dispatching
            await dispatch(createUniversity(formData)).unwrap(); // Dispatch createUniversity action
            showSuccessMessage("University created successfully");
            await dispatch(fetchUniversities({ page, limit, search }));
            reset(); // Reset form fields after successful submission
                {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
        } catch (err) {
            showErrorMessage(err.message || 'Failed to create university');
            setError(err.message || 'Failed to create university');
        }
    };

    // Effect to handle errors from the Redux state (in case of failure from backend)
        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    useEffect(() => {
        if (universityError) {
            setError(universityError); // Set the error if there is one in Redux
        }
    }, [universityError]);
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
    return {
        Controller,
        control,
        isFormData,
        setFormData,
        reset,
        setValue,
        getValues,
        trigger,
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        error: error || universityError, // Combine local error with Redux error
        isUniversityPosting, // Is the university creation in progress
    };
}

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 