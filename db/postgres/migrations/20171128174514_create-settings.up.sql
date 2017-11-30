CREATE TABLE settings (
  id BIGSERIAL PRIMARY KEY,
  key VARCHAR(255) NOT NULL,
  value BYTEA NOT NULL,
  encode BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE UNIQUE INDEX idx_settings_key ON settings (key);
