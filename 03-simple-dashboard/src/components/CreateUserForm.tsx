import { useState } from "react";
import { formData, type FormData } from '../schemas/UserSchema'
import validateUser from '../service/userService'

function UserForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const result = formData.safeParse(form) // <- validamos con zod en runtime

      if(!result.success){
        setError("Datos invalidos")
        setLoading(false) 
        return 
      }

      if(!await validateUser(form)){
        setError("User Not found!")
        setLoading(false)
      }

      setForm({
        name: "",
        email: "",
      });
    } catch (err) {
      setError(`Error al crear usuario: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {error && <p>{error}</p>}

        <button
          type="submit"
          disabled={loading || !form.name || !form.email}
        >
          {loading ? "Creando..." : "Crear usuario"}
        </button>
      </form>
    </section>
  );
}

export default UserForm;
