<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Availability plugin for integration with Proctor by Constructor.
 *
 * @package    availability_proctor
 * @copyright  2019-2022 Maksim Burnin <maksim.burnin@gmail.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($hassiteconfig) {
    $ADMIN->add(
        'reports',
         new admin_externalpage(
             'availability_proctor_settings',
             get_string('log_section', 'availability_proctor'),
             $CFG->wwwroot . '/availability/condition/proctor/index.php',
             'availability/proctor:logaccess'
         )
    );

    $settings = new admin_settingpage('manageavailabilityproctor', new lang_string('settings', 'availability_proctor'));

    if ($ADMIN->fulltree) {
        $settings->add(new admin_setting_configtext('availability_proctor/proctor_url',
            new lang_string('settings_proctor_url', 'availability_proctor'),
            new lang_string('settings_proctor_url_desc', 'availability_proctor'), '', PARAM_HOST));

        $settings->add(new admin_setting_configtext('availability_proctor/integration_name',
            new lang_string('settings_integration_name', 'availability_proctor'),
            new lang_string('settings_integration_name_desc', 'availability_proctor'), '', PARAM_TEXT));

        $settings->add(new admin_setting_configtext('availability_proctor/jwt_secret',
            new lang_string('settings_jwt_secret', 'availability_proctor'),
            new lang_string('settings_jwt_secret_desc', 'availability_proctor'), '', PARAM_TEXT));

        $settings->add(new admin_setting_configtext('availability_proctor/account_id',
            new lang_string('settings_account_id', 'availability_proctor'),
            new lang_string('settings_account_id_desc', 'availability_proctor'), '', PARAM_TEXT));

        $settings->add(new admin_setting_configtext('availability_proctor/account_name',
            new lang_string('settings_account_name', 'availability_proctor'),
            new lang_string('settings_account_name_desc', 'availability_proctor'), '', PARAM_TEXT));

        $settings->add(new admin_setting_configcheckbox('availability_proctor/user_emails',
            new lang_string('settings_user_emails', 'availability_proctor'),
            new lang_string('settings_user_emails_desc', 'availability_proctor'), 1));

        $settings->add(new admin_setting_configcheckbox('availability_proctor/seamless_auth',
            new lang_string('settings_seamless_auth', 'availability_proctor'),
            new lang_string('settings_seamless_auth_desc', 'availability_proctor'), 1));

    }
}
