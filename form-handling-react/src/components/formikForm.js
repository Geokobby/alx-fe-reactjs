import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
      <h2 className="text-2xl font-bold mb-4">User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          setTimeout(() => {
            console.log("User Registered with Formik:", values);

            // Simulate success message
            setStatus({ success: "Registration successful!" });

            resetForm();
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            {/* Username */}
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border rounded p-2"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {/* Success message */}
            {status && status.success && (
              <p className="text-green-500 mt-4">{status.success}</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
