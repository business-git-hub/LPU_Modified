import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { updateUniversity } from '../../stores/actions/universityActions';
import { useState, useEffect } from 'react';
import useGetUniversityById from './usegetUniversityById';
import { fetchUniversities } from '../../stores/actions/universityActions';
import { showErrorMessage, showSuccessMessage } from "../../components/Toast/ToastContainer";
export default function useUpdateUniversity({ universityid }) {
    const dispatch = useDispatch();
    const { university, isUniversityLoading, universityError } = useSelector((state) => state.university); // Redux state
    const [error, setError] = useState(null);
    let id = university?._id || universityid;
    const { getUniversityById, isLoading } = useGetUniversityById(id);

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    useEffect(() => {
        getUniversityById(universityid);
    }, [universityid]);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
        setValue,
        getValues,
        trigger,
    } = useForm({ mode: "onBlur" });


    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

    let defaultValues = {
        identity: {
            name: university?.identity?.name || " ",
            nativeName: university?.identity?.nativeName || " ",
            acronym: university?.identity?.acronym || " ",
            founded: university?.identity?.founded || new Date().getFullYear(),
            colors: university?.identity?.colors || ['', ''],
        },
        location: {
            address: university?.location?.address || " ",
            city: university?.location?.city || " ",
            state: university?.location?.state || " ",
            postalCode: university?.location?.postalCode || " ",
            country: university?.location?.country || " ",
            phone: university?.location?.phone || " ",
            fax: university?.location?.fax || " ",
            website: university?.location?.website || " ",
            email: university?.location?.email || " ",
        },
        sizeAndProfile: {
            studentEnrollment: university?.sizeAndProfile?.studentEnrollment || { min: 0, max: 0 },
            academicStaff: university?.sizeAndProfile?.academicStaff || { min: 0, max: 0 },
            controlType: university?.sizeAndProfile?.controlType || 'Private',
            academicCalendar: university?.sizeAndProfile?.academicCalendar || 'Semester',
            campusSetting: university?.sizeAndProfile?.campusSetting || 'Urban',
            religiousAffiliation: university?.sizeAndProfile?.religiousAffiliation || 'None',
        },
        admissions: {
            gender: university?.admissions?.gender || 'Coed',
            internationalStudents: university?.admissions?.internationalStudents || false,
            selectionType: university?.admissions?.selectionType || 'Selective',
            admissionRate: university?.admissions?.admissionRate || { min: 0, max: 0 },
        },
        tuitionFees: {
            undergraduate: {
                local: university?.tuitionFees?.undergraduate?.local || { min: 0, max: 0 },
                international: university?.tuitionFees?.undergraduate?.international || { min: 0, max: 0 }
            },
            postgraduate: {
                local: university?.tuitionFees?.postgraduate?.local || { min: 0, max: 0 },
                international: university?.tuitionFees?.postgraduate?.international || { min: 0, max: 0 },
            }
        },
        accreditations: {
            institutional: university?.accreditations?.institutional || '',
            specialized: university?.accreditations?.specialized || [],
            firstAccreditationYear: university?.accreditations?.firstAccreditationYear || 0
        },
        facilitiesAndServices: {
            library: university?.facilitiesAndServices?.library || false,
            housing: university?.facilitiesAndServices?.housing || false,
            sportFacilities: university?.facilitiesAndServices?.sportFacilities || false,
            financialAids: university?.facilitiesAndServices?.financialAids || false,
            studyAbroad: university?.facilitiesAndServices?.studyAbroad || false,
            distanceLearning: university?.facilitiesAndServices?.distanceLearning || false,
            academicCounseling: university?.facilitiesAndServices?.academicCounseling || false,
            careerServices: university?.facilitiesAndServices?.careerServices || false,
            institutionalHospital: university?.facilitiesAndServices?.institutionalHospital || false,
        },
        media: {
            images: university?.media?.images || [{ file: undefined }],
        },
        description: university?.description || " ",
    }
    const [isFormData, setFormData] = useState(defaultValues);
    useEffect(() => {
        if (university) {
            reset(university);
            setFormData(defaultValues);
        }
    }, [university, reset]); // ✅ Remove `isFormData
    // Function to handle form submission

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
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
        
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
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

        {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
        try {
            setError(null); // Reset error state before dispatching
            await dispatch(updateUniversity({ universityid, formData })).unwrap(); // Dispatch updateUniversity action
            showSuccessMessage('University updated successfully!');
            await dispatch(fetchUniversities({ page, limit, search }));
        } catch (err) {

            {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
            // showErrorMessage('Failed to update university');
            setError(err.message || 'Failed to update university');
        }
    };

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
    // Effect to handle errors from the Redux state (in case of failure from backend)
    useEffect(() => {
        if (universityError) {
            showErrorMessage('Failed to fetch university'); // Show error message if there is one in Redux
            setError(universityError); // Set the error if there is one in Redux
        }
    }, [universityError]);

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }

    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
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
        isUniversityLoadings: isLoading || isUniversityLoading,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        error: error || universityError, // Combine local error with Redux error
    };
}

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ } 