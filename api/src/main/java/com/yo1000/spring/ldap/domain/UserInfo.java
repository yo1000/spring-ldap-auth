package com.yo1000.spring.ldap.domain;

import java.util.List;

public record UserInfo(String username, List<String> authorities) {}
