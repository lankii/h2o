extern crate base64;
extern crate docopt;
extern crate rand;
extern crate rocket;
#[macro_use]
extern crate serde_derive;
extern crate toml;

pub mod nut;
pub mod forum;
pub mod survey;
pub mod reading;
pub mod erp;
pub mod mall;
pub mod pos;
pub mod ops;

pub mod env;
pub mod result;
pub mod i18n;
pub mod cache;
pub mod db;
pub mod amqp;
pub mod app;
