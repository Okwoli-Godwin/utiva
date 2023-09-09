import React, {useState} from 'react'
import styled from 'styled-components'

const Uploadin = () => {
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    const ImageOnchange = (e: any) => {
        const file = e.target.files[0];
        setImage(file)
        const url = URL.createObjectURL(file)
        setPreviewImage(url)
    }
  return (
      <Container>
          <Wrapper>
              <Imagehold>
                  <Img src={previewImage} />
              </Imagehold>

              <Inp
                  id="pix"
                  type='file'
                  onChange={ImageOnchange}
              />
              <Button htmlFor='pix'>Upload cover image</Button>

              <Input
                  onChange={(e) => {
                      setTitle(e.target.value)
                  }}
                  placeholder='Enter title'
              />
              <TextArea
                  onChange={(e) => {
                      setSummary(e.target.value)
                  }}
                  placeholder="Sumarry....."
              />
              <Input
                  onChange={(e) => {
                      setAuthor(e.target.value)
                  }}
                  placeholder='Enter Author Name'
              />
              <Select
                  onChange={(e) => {
                      setCategory(e.target.value)
                  }}
              >
                  <option>Select category</option>
                  <option>Music</option>
                  <option>Music</option>
                  <option>Drama</option>
              </Select>
              {title !== "" &&
                  category !== "" &&
                  author !== "" &&
                  summary !== "" &&
                  image !== "" ? (
                      <Button2 cp="pointer" bg="black">Submit</Button2>
              ) : (
                      <Button2 cp="not-allowed" bg="silver">Submit</Button2>
                  )
              }
          </Wrapper>
    </Container>
  )
}

export default Uploadin
const Inp = styled.input`
    display: none;
`
const Button2 = styled.button<{bg: string, cp: string}>`
    height: 40px;
    width: 150px;
    background-color: ${({bg}) => bg};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 5px;
    transition: all 350ms;
    margin-top: 10px;
    cursor: ${({cp}) => cp};
    :hover{
        transform: scale(0.98);
    }
`
const Select = styled.select`
    margin: 10px;
    height: 30px;
    width: 370px;
    border-radius: 3px;
    border: 0.7px solid silver;
    padding-left: 10px;
    outline-color: #f8cbe0;
`
const TextArea = styled.textarea`
    width: 350px;
    height: 70px;
    border-radius: 3px;
    border: 0.7 solid silver;
    outline-color: #f8cbe8;
    padding: 10px;
    resize: none;
`
const Button = styled.label`
    height: 40px;
    width: 200px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 5px;
    transition: all 350ms;
    margin-top: 10px;
    cursor: pointer;
    :hover{
        transform: scale(0.98);
    }
`
const Input = styled.input`
    margin: 10px;
    height: 30px;
    width: 350px;
    border-radius: 3px;
    border: 0.7px solid silver;
    padding-left: 10px;
    outline-color: #f8cbe0;
`
const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const Imagehold = styled.div`
    width: 250px;
    height: 150px;
    display: flex;
    border-radius: 7px;
    overflow: hidden;
    border: 1px solid siver;
`
const Wrapper = styled.div`
    width: 600px;
    display: flex;
    padding: 20px;
    flex-direction: column;
    border: 1px solid silver;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`