import useCustomForm from "@/app/components/hook/useCustomForm";

export default function SimpleFormWithCustomHook()
{
    const { register, handleSubmit, } = useCustomForm();
    const onSubmit = data => console.log('form data ',data);


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label>
                    Name
                </label>
                <input defaultValue="test" {...register("name")} />
            </div>

            <div>
                <label>
                    Email
                </label>
                <input {...register("email")} />
            </div>

            <input type="submit" />
        </form>
    );
}