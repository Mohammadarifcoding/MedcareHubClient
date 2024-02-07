import axios from 'axios';
import Swal from 'sweetalert2';
import UseAuth from '../../../../../Hook/UseAuth.tsx';
import UseAxiosPublic from '../../../../../Hook/UseAxiosPublic.tsx';

const image_hosting_key = '140f2d0db1502e65c2c0ee7bfc66be98';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PatientRegister = () => {
    const { user } = UseAuth();
    const AxiousPublic = UseAxiosPublic();

    const handleAddPatient = async (event) => {
        event.preventDefault();
        const form = event.target;
        const ID = crypto.randomUUID();
        const patientEmail = form.email.value;
        const patientName = form.patientName.value;
        const Age = form.Age.value;
        const bloodGroup = form.bloodGroup.value;
        const Gender = form.Gender.value;
        const patientIssue = form.patientIssue.value;
        const Tests = form.previousTests.files;

        const imageUrls = await Promise.all(
            Array.from(Tests).map(async (file) => {
                const formData = new FormData();
                formData.append('image', file);

                try {
                    const response = await axios.post(image_hosting_api, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    return response.data.data.url;
                } catch (error) {
                    console.error('Error uploading image:', error);
                    return null;
                }
            })
        );

        let imageUrl;

        const formData = new FormData();
        const singleImageFile = form.Image.files[0];
        formData.append('image', singleImageFile);

        try {
            const response = await axios.post(image_hosting_api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            imageUrl = response.data.data.url;
        } catch (error) {
            console.error('Error uploading image:', error);

            return;
        }

        const newPatient = {
            ID,
            patientEmail,
            patientName,
            previousTests: imageUrls?.filter((url) => url !== null),
            Age,
            Image: imageUrl,
            bloodGroup,
            Gender,
            patientIssue
        };
        console.log('newpatient', newPatient);

        AxiousPublic.post('/Patients', newPatient)
            .then((response) => {
                // console.log(response.data);
                if (response.data) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Registration Successful!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="mx-3">
            <div className="md:py-20 py-10 px-3">
                <h1 className="text-center font-extrabold mb-10 text-purple-500 text-2xl md:text-4xl">Register Patient</h1>
                <form onSubmit={handleAddPatient}>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Email</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Email</span>
                                <input type="text" name="email" defaultValue={user?.email} className="input rounded-r-md rounded-l-none w-full" readOnly />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Name</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Name</span>
                                <input type="text" name="patientName" placeholder="Enter Patient Name" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Image URL</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Image:</span>
                                <input
                                    type="file"
                                    name="Image"
                                    className="input rounded-r-md rounded-l-none w-full font-medium bg-[#0360D9] p-2 text-white file-input file-input-bordered border-none file-input-info"
                                    accept="image/*"
                                    required
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Age</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Age</span>
                                <input type="number" name="Age" placeholder="Enter Patient Age" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Select Your Blood Group</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full font-medium bg-[#0360D9] p-3 rounded-md text-white" name="bloodGroup" required>
                                    <option value="">Select Your Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Select Your Gender</span>
                            </label>
                            <label className="input-group">
                                <select className="w-full font-medium bg-[#0360D9] p-3 rounded-md text-white" name="Gender" required>
                                    <option value="">Select Your Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-6 justify-center mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Problem</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Issue</span>
                                <input type="text" name="patientIssue" placeholder="Enter Your Problem" className="input rounded-r-md rounded-l-none w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Patient Previous Tests</span>
                            </label>
                            <label className="flex items-center">
                                <span className="font-medium bg-[#0360D9] p-3 rounded-l-md text-white">Tests:</span>
                                <input
                                    type="file"
                                    name="previousTests"
                                    multiple
                                    className="input rounded-r-md rounded-l-none w-full font-medium bg-[#0360D9] p-2 text-white file-input file-input-bordered border-none file-input-info"
                                    accept="image/*"
                                />
                            </label>
                        </div>
                    </div>
                    <input className="btn btn-block bg-[#0360D9] text-white" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default PatientRegister;
