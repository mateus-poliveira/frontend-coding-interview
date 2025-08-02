import { act, fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./login-form";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("renders inputs and button", () => {
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("calls redirect when correct credentials are provided", () => {
    act(() => {
      fireEvent.change(screen.getByTestId("username"), {
        target: { value: "testing@testing" },
      });
      fireEvent.change(screen.getByTestId("password"), {
        target: { value: "1234" },
      });
      fireEvent.click(screen.getByTestId("submit"));
    });

    expect(document.cookie).toBe("auth=testing");
    expect(pushMock).toHaveBeenCalledTimes(1);
  });

  it("does not call redirect when incorrect credentials are provided", () => {
    jest.spyOn(window, "alert").mockImplementation(() => {});

    act(() => {
      fireEvent.change(screen.getByTestId("username"), {
        target: { value: "testing" },
      });
      fireEvent.change(screen.getByTestId("password"), {
        target: { value: "1234" },
      });
      fireEvent.click(screen.getByTestId("submit"));
    });

    expect(window.alert).toHaveBeenCalledWith("Invalid credentials");
  });
});
