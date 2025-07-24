import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    designation: "",
    niche: "",
    location: "",
    reason: ""
  });

  const handleInputChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  // Form Input Component
  const FormInput = ({ label, placeholder, type = "text", value, onChange }: {
    label: string;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (value: string) => void;
  }) => (
    <div className="flex flex-col w-full max-w-72">
      <div className="w-full pb-2">
        <label className="text-text-secondary font-ibm-plex text-xs font-normal leading-4 tracking-[0.32px]">
          {label}
        </label>
      </div>
      <div className="w-full bg-white flex flex-col">
        <div className="flex py-[15px] px-4 items-center gap-2">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="flex-1 font-ibm-plex text-sm font-normal leading-[18px] tracking-[0.16px] placeholder:text-text-placeholder text-black bg-transparent outline-none"
          />
        </div>
        <div className="h-px w-full bg-border-strong"></div>
      </div>
    </div>
  );

  // Form TextArea Component
  const FormTextArea = ({ label, placeholder, maxLength = 300, value = "", onChange }: {
    label: string;
    placeholder: string;
    maxLength?: number;
    value?: string;
    onChange?: (value: string) => void;
  }) => {
    const [text, setText] = useState(value);

    const handleChange = (newValue: string) => {
      if (newValue.length <= maxLength) {
        setText(newValue);
        onChange?.(newValue);
      }
    };

    return (
      <div className="flex flex-col gap-2 w-full max-w-72">
        <div className="flex items-end justify-between w-full">
          <label className="flex-1 text-text-secondary font-ibm-plex text-xs font-normal leading-4 tracking-[0.32px]">
            {label}
          </label>
          <span className="text-text-secondary font-ibm-plex text-xs font-normal leading-4 tracking-[0.32px]">
            {text.length}/{maxLength}
          </span>
        </div>
        <div className="h-[120px] flex flex-col gap-1 w-full">
          <div className="flex-1 w-full bg-white relative">
            <textarea
              placeholder={placeholder}
              value={text}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full h-[98px] p-4 font-ibm-plex text-sm font-normal leading-[18px] tracking-[0.16px] placeholder:text-text-placeholder text-black bg-transparent outline-none resize-none"
            />
          </div>
          <div className="h-px w-full bg-border-strong"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 pt-12 pb-24">
        <div className="flex flex-col xl:flex-row justify-end items-start gap-12 xl:gap-[98px]">
          {/* Left side - Title and Description */}
          <div className="flex flex-col items-start gap-2.5 flex-1 xl:flex-initial xl:max-w-md">
            <div className="flex flex-col items-start gap-6 w-full">
              <h1 className="font-urbanist text-2xl font-bold text-black">
                Start Your Own :80
              </h1>
              <p className="font-urbanist text-base font-normal leading-6 tracking-[0.32px] text-black">
                Launch a niche tech meetup with FAYA:80! Fill out this form to propose your event, connect with enthusiasts, and shape the future of technology.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col justify-between items-start xl:items-end w-full xl:w-auto">
            <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-[72px] w-full xl:w-auto">
              {/* Left column of inputs */}
              <div className="flex flex-col items-start gap-6 w-full xl:w-auto">
                <FormInput
                  label="Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange("name")}
                />
                <FormInput
                  label="Email Address"
                  placeholder="Enter your personal email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                />
                <FormInput
                  label="Organization/Company"
                  placeholder="Enter your organization/ company"
                  value={formData.organization}
                  onChange={handleInputChange("organization")}
                />
                <FormInput
                  label="Designation"
                  placeholder="Enter your designation"
                  value={formData.designation}
                  onChange={handleInputChange("designation")}
                />
              </div>

              {/* Right column of inputs */}
              <div className="flex flex-col items-start gap-6 w-full xl:w-auto">
                <FormInput
                  label="Niche/Domain"
                  placeholder="What kind of :80 are you planning?"
                  value={formData.niche}
                  onChange={handleInputChange("niche")}
                />
                <FormInput
                  label="Proposed Location"
                  placeholder="Enter your proposed location"
                  value={formData.location}
                  onChange={handleInputChange("location")}
                />

                <FormTextArea
                  label="The Reason"
                  placeholder="Why are you interested to host :80s"
                  value={formData.reason}
                  onChange={handleInputChange("reason")}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 xl:mt-0 w-full xl:w-auto flex justify-start xl:justify-end">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-[150px] px-4 py-4 justify-center items-center gap-2.5 bg-faya-orange hover:bg-faya-orange/90 disabled:bg-faya-orange/50 transition-colors"
              >
                <span className="text-white font-urbanist text-base font-medium">
                  Request
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
