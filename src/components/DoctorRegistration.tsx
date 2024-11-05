import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

interface Education {
  degree: string;
  institution: string;
  year: string;
  certificate: File | null;
}

interface Experience {
  hospital: string;
  position: string;
  from: string;
  to: string;
  certificate: File | null;
}

function DoctorRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    specialization: '',
    registrationNumber: '',
    bio: ''
  });

  const [education, setEducation] = useState<Education[]>([
    { degree: '', institution: '', year: '', certificate: null }
  ]);

  const [experience, setExperience] = useState<Experience[]>([
    { hospital: '', position: '', from: '', to: '', certificate: null }
  ]);

  const handleAddEducation = () => {
    setEducation([...education, { degree: '', institution: '', year: '', certificate: null }]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleAddExperience = () => {
    setExperience([...experience, { hospital: '', position: '', from: '', to: '', certificate: null }]);
  };

  const handleRemoveExperience = (index: number) => {
    setExperience(experience.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    // For now, we'll simulate the registration process
    toast.success('Registration submitted successfully! Awaiting admin verification.');
    navigate('/signin');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Doctor Registration</h2>

      <div className="mb-8 flex justify-between">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1/3 h-2 rounded-full mx-1 ${
              step >= i ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Full Name *</label>
                <input
                  type="text"
                  value={basicInfo.name}
                  onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block mb-1">Email *</label>
                <input
                  type="email"
                  value={basicInfo.email}
                  onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Phone *</label>
                <input
                  type="tel"
                  value={basicInfo.phone}
                  onChange={(e) => setBasicInfo({ ...basicInfo, phone: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Password *</label>
                <input
                  type="password"
                  value={basicInfo.password}
                  onChange={(e) => setBasicInfo({ ...basicInfo, password: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Specialization *</label>
                <input
                  type="text"
                  value={basicInfo.specialization}
                  onChange={(e) => setBasicInfo({ ...basicInfo, specialization: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-1">Medical Registration Number *</label>
                <input
                  type="text"
                  value={basicInfo.registrationNumber}
                  onChange={(e) => setBasicInfo({ ...basicInfo, registrationNumber: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1">Professional Bio *</label>
              <textarea
                value={basicInfo.bio}
                onChange={(e) => setBasicInfo({ ...basicInfo, bio: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                required
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Education & Qualifications</h3>
            
            {education.map((edu, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-1">Degree *</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].degree = e.target.value;
                        setEducation(newEducation);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Institution *</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].institution = e.target.value;
                        setEducation(newEducation);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Year *</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => {
                        const newEducation = [...education];
                        newEducation[index].year = e.target.value;
                        setEducation(newEducation);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Certificate *</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const newEducation = [...education];
                      newEducation[index].certificate = e.target.files?.[0] || null;
                      setEducation(newEducation);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                </div>

                {education.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddEducation}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add Education
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
            
            {experience.map((exp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1">Hospital/Clinic *</label>
                    <input
                      type="text"
                      value={exp.hospital}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].hospital = e.target.value;
                        setExperience(newExperience);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">Position *</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].position = e.target.value;
                        setExperience(newExperience);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">From *</label>
                    <input
                      type="date"
                      value={exp.from}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].from = e.target.value;
                        setExperience(newExperience);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1">To *</label>
                    <input
                      type="date"
                      value={exp.to}
                      onChange={(e) => {
                        const newExperience = [...experience];
                        newExperience[index].to = e.target.value;
                        setExperience(newExperience);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1">Experience Certificate *</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const newExperience = [...experience];
                      newExperience[index].certificate = e.target.files?.[0] || null;
                      setExperience(newExperience);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                  />
                </div>

                {experience.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddExperience}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <Plus className="w-5 h-5 mr-1" />
              Add Experience
            </button>
          </motion.div>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          
          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Submit Registration
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default DoctorRegistration;