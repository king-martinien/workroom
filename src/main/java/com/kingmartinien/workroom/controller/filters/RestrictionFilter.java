package com.kingmartinien.workroom.controller.filters;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

public class RestrictionFilter implements Filter {
    private static final String SESSION_WORKROOM_USER = "workroomUser";
    private static final String VIEW_LOGIN = "/login";

    @Override

    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("INIT FILTER");
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;

        HttpSession session = req.getSession();
        if (session.getAttribute(SESSION_WORKROOM_USER) == null) {
            resp.sendRedirect(req.getContextPath() + VIEW_LOGIN);
        }

        chain.doFilter(req, resp);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
