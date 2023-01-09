import React, { useState } from "react";
import { useFormik } from "formik";
import {
    Input,
    Stack,
    Select,
    Button,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Container,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText
} from '@chakra-ui/react'





const Home = () => {

    const [slider, setSlider] = useState<number>(5)


    const formik = useFormik({
        initialValues: {
            fraseImagem: '',
            qntImagens: 50
        },
        onSubmit: (values) => {
            alert(values.fraseImagem)
        },
        enableReinitialize: true

    })

    return (
        <Container marginTop="15%">
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3} direction="column" justifyContent="center">
                    
                    <FormLabel>Digite a frase para imagem que você deseja gerar: </FormLabel>

                    <Input width={"100%"} id={"fraseImagem"} placeholder="Leozinho" onChange={formik.handleChange}
                        value={formik.values.fraseImagem} />

                    <Select variant="filled" placeholder="Tamanho Imagem">
                        <option>Tamanho 1</option>
                        <option>Tamanho 2</option>
                        <option>Tamanho 3</option>
                    </Select>
                    
                    <Button type="submit" maxW="30%"/>

                    <Slider aria-label='slider-ex-6' min={1} max={9} step={1} onChange={(e) => setSlider(e)}>
                        <SliderMark
                            value={slider}
                            textAlign='center'
                            bg='blue.500'
                            color='white'
                            mt='-10'
                            ml='-5'
                            w='12'
                        >
                            {slider}
                        </SliderMark>
                        <SliderThumb />
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                    </Slider>
                </Stack>
            </form>
        </Container>
    )
}


export default Home;