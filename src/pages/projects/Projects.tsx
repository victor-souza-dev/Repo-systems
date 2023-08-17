import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { configProjects } from ".";
import { CardProject } from "../../components/Card";
import { EmptyData } from "../../components/EmptyData/EmptyData";

export default function Projects() {
  const [searchText, setSearchText] = useState("");
  const filteredConfig = configProjects.filter((value) =>
    value.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Flex flexDirection={"column"} p={"10"}>
      <Box mb={"5"}>
        <Heading size={"lg"} mb={"3"}>
          Projetos
        </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineSearch />
          </InputLeftElement>
          <Input
            variant={"filled"}
            size={"md"}
            width={"auto"}
            borderRadius={"2xl"}
            placeholder="pesquisar projeto..."
            onChange={(event) => setSearchText(event.target.value)}
          />
        </InputGroup>
      </Box>
      <SimpleGrid
        flexDirection={"row"}
        marginTop={"20px"}
        spacing={5}
        templateColumns={{
          sm: "repeat(auto-fill, full)",
          md: "repeat(auto-fill, max(250px))",
        }}
      >
        {filteredConfig.map((value) => {
          return (
            <CardProject.Container key={value.id}>
              <CardProject.Header
                name={value.name}
                photo={value.photo}
                link={value.link}
              />
              <CardProject.Body text={value.text} />
              <CardProject.Footer link={value.link} version={value.version} />
            </CardProject.Container>
          );
        })}
      </SimpleGrid>
      {filteredConfig.length === 0 && <EmptyData />}
    </Flex>
  );
}
