package com.app.fapi.Entities;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PagingResponse {
    private List<?> data;
    private Map<String, Object> meta;

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {

        private List<?> data;
        private Map<String, Object> meta;

        private Builder() {
            meta = new HashMap<>();
        }

        public Builder data(List<?> data) {
            this.data = data;
            return this;
        }

        public Builder page(Object page) {
            this.meta.put("page", page);
            return this;
        }

        public Builder size(Object size) {
            this.meta.put("size", size);
            return this;
        }

        public Builder total(Object total) {
            this.meta.put("total", total);
            return this;
        }

        public Builder custom(String key, Object value) {
            this.meta.put(key, value);
            return this;
        }

        public PagingResponse build() {
            return new PagingResponse(data, meta);
        }

    }
}
