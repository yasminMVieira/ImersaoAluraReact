import { StyledRegisterVideo } from "./styles";
import React from "react";

//hook
function useForm(propsForm){ //dados do forms
    const [values, setValues] = React.useState(propsForm.initialValues);
    return {
        values, 
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}
export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues:{ titulo: "tinker", url: "http://youtube.." } 
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    
    
    // Botão add video
    // Modal e formulario em si

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel 
                ? (
                    <form onSubmit={(evento) =>{
                        evento.preventDefault();
                        
                        setFormVisivel(false);
                        formCadastro.clearForm();                        
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                x
                            </button>
                            <input 
                                placeholder="Titulo do video" 
                                name="titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange} />
                            <input 
                                placeholder="URL" 
                                namo="url"
                                value={formCadastro.values.url}  
                                onChange={formCadastro.handleChange}  />
                            <button type="submit" >
                                Cadastrar
                            </button>
                        </div>
                    </form>
            ):false}
        </StyledRegisterVideo>
    
    )
}