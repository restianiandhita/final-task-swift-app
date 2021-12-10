import React from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, ImageBackground} from 'react-native';
import {Text, Caption, TouchableRipple} from 'react-native-paper';
import {withProfiler} from '@sentry/react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formSchema} from '@app/_modules/auth_signin/forms';

import Forms from '@app/components/_Forms/index';
import AppBar from '@app/components/AppBar';
import styles from '@app/_modules/auth_signin/styles';

/**
 * ---------------------------------------------------- *
 * @component AuthSigningView
 * @param {Object} Views.propTypes - defined using PropTypes
 * @summary View Component for Sign In
 * @returns Components
 * ---------------------------------------------------- *
 */

const Views = ({t, loading, onSignin, onError, onNavigateSignup}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <AppBar useBack title={t('login.title')} />
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/3d/64/bc/3d64bcb91c8e1c7ff1dcefbd4378f80a.jpg',
        }}
        style={{width: '100%', height: '100%'}}>
        <ScrollView contentContainerStyle={styles.mainContainer}>
          <View style={styles.parent}>
            <Text style={styles.title}>{t('login.titleScreen')}</Text>
            <Caption style={styles.caption}>{t('login.captionScreen')}</Caption>
            <Forms
              fields={formSchema}
              onSubmit={onSignin}
              onError={onError}
              loading={loading}
              buttonTitle={t('login.button')}
            />
            <View style={styles.footerForm}>
              <Caption style={{color: 'black'}}>
                {t('login.captionRegister')}
                {'\n'}
              </Caption>
              <TouchableRipple onPress={onNavigateSignup}>
                <Caption style={styles.btnSignup}>
                  {t('login.buttonRegister')}
                </Caption>
              </TouchableRipple>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

Views.propTypes = {
  // use for displaying label from translation module
  t: PropTypes.func.isRequired,
  // use to determined loading state
  loading: PropTypes.bool,
  // use as callback function on Submit
  onSignin: PropTypes.func.isRequired,
  // use as callback function for onError from the useForm
  onError: PropTypes.func,
  // use as callback on register touchable
  onNavigateSignup: PropTypes.func.isRequired,
};

export default withProfiler(Views, {name: 'AuthSigninView'});
