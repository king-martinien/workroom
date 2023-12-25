package com.kingmartinien.workroom.controller.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class SignupServlet extends HttpServlet {
    private static final String VIEW_SIGNUP = "/WEB-INF/pages/public/signup.jsp";

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.getServletContext().getRequestDispatcher(VIEW_SIGNUP).forward(req, resp);
    }
}
