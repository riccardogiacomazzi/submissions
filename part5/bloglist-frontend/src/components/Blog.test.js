import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Blog from "../components/Blog";

const userLogged = {
  username: "admin",
  name: "Riccardo Giacomaziz",
  id: "6581b11dad414436adf04a38",
};

test("Title and Author are correctly rendered", () => {
  jest.mock("./RemoveButton", () => ({
    __esModule: true,
    default: jest.fn(() => null),
  }));

  const blogs = [
    {
      title: "Test blog title is rendered",
      author: "Tester author",
      url: "www.test.com",
      likes: 0,
      user: {
        username: "admin",
        name: "admino",
        id: "6581b11dad414436adf04a38",
      },
      id: "6585c7fbd17394973f7a0485",
    },
  ];

  const { container } = render(<Blog blogs={blogs} user={userLogged} />);

  const div = container.querySelector(".blogTitle");
  expect(div).toHaveTextContent("Test blog title is rendered by Tester author");
});
