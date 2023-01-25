import React, { useState } from "react";
import {
  Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  CardHeader,
  CardTitle,
  Card,
  CardBody,
  InputGroup,
} from "reactstrap";
import "../index.css";
import swal from "sweetalert";
import "../index.css";
import axios from "axios";
export default function PrintJobNotification() {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  // const [file, setFile] = useState();
  const [fileNameUpload, setFileNameUpload] = useState("");
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileNameUpload(e.target.files[0].name);
    setImagePreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    console.log(imagePreviewUrl);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileNameUpload", fileNameUpload);
    const result = await axios.post("http://localhost:3000/upload", formData);
    console.log(result);

    try {
      result
        ? swal({
            title: "Good job!",
            text: "File Upload Data Get !",
            icon: "success",
            button: "OK!",
            customClass: "swal-wide",
          })
        : swal({
            title: "Error!",
            text: "Spmethings issue!",
            icon: "error",
            button: "OK!",
            customClass: "swal-wide",
          });
    } catch (ex) {
      ex
        ? swal({
            title: "Error!",
            text: "File Failed to Upload!",
            icon: "error",
            button: "OK!",
          })
        : alert("Error");
    }
  };

  // const [file, setFile] = useState();
  const [fileName, setFileName] = useState("Submit...");

  const fileSubmit = async (e) => {
    e.preventDefault();
    alert(fileName);
    setFileName(fileName);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <img
            alt="Sample"
            width={50}
            height={50}
            src="data:image/png;base64,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"
          />
          <h4>
            <strong style={{ color: "black" }}> Upload a File</strong>
          </h4>
        </CardHeader>

        <CardBody>
          <Form onSubmit={uploadFile}>
            <FormGroup row={true}>
              <Col md="12">
                <Label style={{ color: "black" }} for="file">
                  Select File/Image
                </Label>
                <InputGroup>
                  <Input
                    type="file"
                    name="file"
                    id="file"
                    onChange={saveFile}
                    className="input-file"
                  />
                  {/* <img
              src={imagePreviewUrl === null ? " " : imagePreviewUrl}
              alt="Preview"
              className="image-preview"
            /> */}
                </InputGroup>
              </Col>
            </FormGroup>
            <Button color="primary">Upload</Button>
          </Form>
        </CardBody>

        <CardHeader
          style={{ color: "black", textAlign: "left", width: "100%" }}
        >
          <CardTitle tag="h6">Print Job Notification</CardTitle>
        </CardHeader>

        <CardBody>
          <Form onSubmit={fileSubmit}>
            <FormGroup>
              <Col md="12">
                <h6 style={{ color: "black" }}>
                  Comfirm the print and select OK to submit
                </h6>
              </Col>
              <Col md=""></Col>
            </FormGroup>
            <Row>
              <FormGroup>
                <Col md="12">
                  <Label style={{ color: "black" }} for="exampleEmail">
                    Document name
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Doucment1.docx"
                    type="email"
                  />
                </Col>
                <Col md="12">
                  <Label style={{ color: "black" }} for="exampleEmail">
                    Printer
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Auto Generated Printer1"
                    type="email"
                  />
                </Col>
                <Row md="12">
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Pages
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="2 (Grayscale)"
                      type="email"
                    />
                  </Col>
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Paper Size
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Letter"
                      type="email"
                    />
                  </Col>
                </Row>
                <Row md="12">
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Orientation
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Landscape"
                      type="email"
                    />
                  </Col>
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Duplex
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Two Sided"
                      type="email"
                    />
                  </Col>
                </Row>
                <Row md="12">
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Computer Name
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="ADULT01"
                      type="email"
                    />
                  </Col>
                  <Col md="6">
                    <Label style={{ color: "black" }} for="exampleEmail">
                      Cost
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="$0.36"
                      type="email"
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Row>
            <div>
              <Button color="primary">OK</Button>{" "}
              <Button color="primary">Cancel</Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
