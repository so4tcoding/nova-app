import{r as Fe,g as m,_ as At,a as bt,b as Rn,c as Cn,d as xe,i as $e,p as Nn,e as g,q as se,f as ee,h as te,E as je,j as On,S as ae,k as w,L as Ln,l as Rt,m as Un,n as Dn,F as qe,o as Mn,s as Fn,D as xn,t as Vn,u as Wn,v as at,C as ot,w as Hn,x as Be,y as v,z as h,A as Ke,B as p,G as Ge,H as j,I,J as R,K as S,M as Ct,N as $,O as $n,P as jn,Q as qn,R as Bn,T as Q,U as Kn}from"./index.esm-Do8jXKZC.js";import{h as Nt,l as P,k as Ot,p as Gn,n as zn,o as Jn,q as Yn,t as Xn,v as Qn,w as Zn,c as er,x as tr}from"./index-DgrxX9dl.js";import{phoneHash as nr}from"./sha256-CdKorNY-.js";var rr="firebase",ir="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(rr,ir,"app");function Lt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sr=Lt,Ut=new je("auth","Firebase",Lt());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new Ln("@firebase/auth");function pe(n,...e){Ie.logLevel<=Rt.WARN&&Ie.warn(`Auth (${ae}): ${n}`,...e)}function me(n,...e){Ie.logLevel<=Rt.ERROR&&Ie.error(`Auth (${ae}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(n,...e){throw ze(n,...e)}function y(n,...e){return ze(n,...e)}function Ae(n,e,t){const r={...sr(),[e]:t};return new je("auth","Firebase",r).create(e,{appName:n.name})}function O(n){return Ae(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dt(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&E(n,"argument-error"),Ae(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ze(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ut.create(n,...e)}function l(n,e,...t){if(!n)throw ze(e,...t)}function C(n){const e="INTERNAL ASSERTION FAILED: "+n;throw me(e),new Error(e)}function L(n,e){n||C(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ar(){return ct()==="http:"||ct()==="https:"}function ct(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ar()||Vn()||"connection"in navigator)?navigator.onLine:!0}function cr(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.shortDelay=e,this.longDelay=t,L(t>e,"Short delay should be less than long delay!"),this.isMobile=Mn()||Fn()}get(){return or()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,e){L(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;C("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;C("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;C("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dr=new oe(3e4,6e4);function U(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function k(n,e,t,r,i={}){return Ft(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=se({...a,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...s};return Wn()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&$e(n.emulatorConfig.host)&&(u.credentials="include"),Mt.fetch()(await xt(n,n.config.apiHost,t,o),u)})}async function Ft(n,e,t){n._canInitEmulator=!1;const r={...ur,...e};try{const i=new fr(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw he(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw he(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw he(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw he(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ae(n,d,u);E(n,d)}}catch(i){if(i instanceof qe)throw i;E(n,"network-request-failed",{message:String(i)})}}async function ce(n,e,t,r,i={}){const s=await k(n,e,t,r,i);return"mfaPendingCredential"in s&&E(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function xt(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Je(n.config,i):`${n.config.apiScheme}://${i}`;return lr.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function hr(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(y(this.auth,"network-request-failed")),dr.get())})}}function he(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=y(n,e,r);return i.customData._tokenResponse=t,i}function ut(n){return n!==void 0&&n.enterprise!==void 0}class pr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hr(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mr(n,e){return k(n,"GET","/v2/recaptchaConfig",U(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n,e){return k(n,"POST","/v1/accounts:delete",e)}async function ye(n,e){return k(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wr(n,e=!1){const t=m(n),r=await t.getIdToken(e),i=be(r);l(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ne(Ue(i.auth_time)),issuedAtTime:ne(Ue(i.iat)),expirationTime:ne(Ue(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ue(n){return Number(n)*1e3}function be(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return me("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dn(t);return i?JSON.parse(i):(me("Failed to decode base64 JWT payload"),null)}catch(i){return me("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lt(n){const e=be(n);return l(e,"internal-error"),l(typeof e.exp<"u","internal-error"),l(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw Vt(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Vt(n){return n instanceof qe?n.code==="auth/user-disabled"||n.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ne(this.lastLoginAt),this.creationTime=ne(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(n){var f;const e=n.auth,t=await n.getIdToken(),r=await B(n,ye(e,{idToken:t}));l(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?Wt(i.providerUserInfo):[],a=yr(n.providerData,s),o=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),u=o?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new We(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Ir(n){const e=m(n);await Ee(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yr(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wt(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n,e){const t=await Ft(n,{},async()=>{const r=se({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await xt(n,i,"/v1/token",`key=${s}`),o=await n._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return n.emulatorConfig&&$e(n.emulatorConfig.host)&&(c.credentials="include"),Mt.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tr(n,e){return k(n,"POST","/v2/accounts:revokeToken",U(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){l(e.idToken,"internal-error"),l(typeof e.idToken<"u","internal-error"),l(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){l(e.length!==0,"internal-error");const t=lt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(l(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Er(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new J;return r&&(l(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(l(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(l(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new J,this.toJSON())}_performRefresh(){return C("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e){l(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class T{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new _r(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new We(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await B(this,this.stsTokenManager.getToken(this.auth,e));return l(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wr(this,e)}reload(){return Ir(this)}_assign(e){this!==e&&(l(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new T({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){l(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ee(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(g(this.auth.app))return Promise.reject(O(this.auth));const e=await this.getIdToken();return await B(this,gr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:f,emailVerified:_,isAnonymous:de,providerData:Z,stsTokenManager:st}=t;l(f&&st,e,"internal-error");const An=J.fromJSON(this.name,st);l(typeof f=="string",e,"internal-error"),M(r,e.name),M(i,e.name),l(typeof _=="boolean",e,"internal-error"),l(typeof de=="boolean",e,"internal-error"),M(s,e.name),M(a,e.name),M(o,e.name),M(c,e.name),M(u,e.name),M(d,e.name);const Le=new T({uid:f,auth:e,email:i,emailVerified:_,displayName:r,isAnonymous:de,photoURL:a,phoneNumber:s,tenantId:o,stsTokenManager:An,createdAt:u,lastLoginAt:d});return Z&&Array.isArray(Z)&&(Le.providerData=Z.map(bn=>({...bn}))),c&&(Le._redirectEventId=c),Le}static async _fromIdTokenResponse(e,t,r=!1){const i=new J;i.updateFromServerResponse(t);const s=new T({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ee(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];l(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wt(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),o=new J;o.updateFromIdToken(r);const c=new T({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new We(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new Map;function N(n){L(n instanceof Function,"Expected a class definition");let e=dt.get(n);return e?(L(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,dt.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ht.type="NONE";const Te=Ht;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e,t){return`firebase:${n}:${e}:${t}`}class q{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ge(this.userKey,i.apiKey,s),this.fullPersistenceKey=ge("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ye(this.auth,{idToken:e}).catch(()=>{});return t?T._fromGetAccountInfoResponse(this.auth,t,e):null}return T._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,r="authUser"){if(!t.length)return new q(N(Te),e,r);const i=(await Promise.all(t.map(async u=>{try{if(await u._isAvailable())return u}catch{return}}))).filter(u=>u);let s=i[0]||N(Te);const a=ge(r,e.config.apiKey,e.name);let o=null;for(const u of t)try{const d=await u._get(a);if(d){let f;if(typeof d=="string"){const _=await ye(e,{idToken:d}).catch(()=>{});if(!_)break;f=await T._fromGetAccountInfoResponse(e,_,d)}else f=T._fromJSON(e,d);u!==s&&(o=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new q(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new q(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($t(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gt(e))return"Blackberry";if(zt(e))return"Webos";if(jt(e))return"Safari";if((e.includes("chrome/")||qt(e))&&!e.includes("edge/"))return"Chrome";if(Kt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $t(n=w()){return/firefox\//i.test(n)}function jt(n=w()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qt(n=w()){return/crios\//i.test(n)}function Bt(n=w()){return/iemobile/i.test(n)}function Kt(n=w()){return/android/i.test(n)}function Gt(n=w()){return/blackberry/i.test(n)}function zt(n=w()){return/webos/i.test(n)}function Ye(n=w()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vr(n=w()){var e;return Ye(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Pr(){return Un()&&document.documentMode===10}function Jt(n=w()){return Ye(n)||Kt(n)||zt(n)||Gt(n)||/windows phone/i.test(n)||Bt(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e=[]){let t;switch(n){case"Browser":t=ht(w());break;case"Worker":t=`${ht(w())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ae}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(n,e={}){return k(n,"GET","/v2/passwordPolicy",U(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=6;class br{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ar,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.beforeStateQueue=new kr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ut,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=N(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await q.create(this,e)}catch(a){pe(`Failed to initialize persistence: ${a}`),this.persistenceManager=await q.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(a){pe(`Failed to initialize current user: ${a}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ye(this,{idToken:e}),r=await T._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(g(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return l(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ee(e)}catch(t){if(Vt(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cr()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(g(this.app))return Promise.reject(O(this));const t=e?m(e):null;return t&&l(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&l(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return g(this.app)?Promise.reject(O(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return g(this.app)?Promise.reject(O(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(N(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sr(this),t=new br(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new je("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tr(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&N(e)||this._popupRedirectResolver;l(t,this,"argument-error"),this.redirectPersistenceManager=await q.create(this,[N(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(l(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}).catch(c=>{if(!a)if(typeof t!="function"&&t.error)t.error(c);else if(r)r(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const r=(t==null?void 0:t.message)||String(t),i=Ae(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:t},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return l(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(g(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pe(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function D(n){return m(n)}class ft{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hn(t=>this.observer=t)}get next(){return l(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cr(n){Re=n}function Xt(n){return Re.loadJS(n)}function Nr(){return Re.recaptchaEnterpriseScript}function Or(){return Re.gapiScript}function Lr(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ur{constructor(){this.enterprise=new Dr}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Dr{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="recaptcha-enterprise",Qt="NO_RECAPTCHA",pt="onFirebaseAuthREInstanceReady";class F{constructor(e){this.type=Mr,this.auth=D(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{mr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new pr(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;ut(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(Qt)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ur().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(async o=>{if(!t&&ut(window.grecaptcha)&&F.scriptInjectionDeferred)await F.scriptInjectionDeferred.promise,i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Nr();c.length!==0&&(c+=o+`&onload=${pt}`),F.scriptInjectionDeferred=new xn,window[pt]=()=>{var u;(u=F.scriptInjectionDeferred)==null||u.resolve()},Xt(c).then(()=>{var u;return(u=F.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{i(o,s,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}F.scriptInjectionDeferred=null;async function mt(n,e,t,r=!1,i=!1){const s=new F(n);let a;if(i)a=Qt;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,u=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ve(n,e,t,r,i){var s;if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await mt(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await mt(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,e){const t=At(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(xe(s,e??{}))return i;E(i,"already-initialized")}return t.initialize({options:e})}function Fr(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(N);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function en(n,e,t){const r=D(n);l(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=tn(e),{host:a,port:o}=xr(e),c=o===null?"":`:${o}`,u={url:`${s}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){l(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),l(xe(u,r.config.emulator)&&xe(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,$e(a)?Nn(`${s}//${a}${c}`):i||Vr()}function tn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xr(n){const e=tn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gt(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gt(a)}}}function gt(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Vr(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return C("not implemented")}_getIdTokenResponse(e){return C("not implemented")}_linkToIdToken(e,t){return C("not implemented")}_getReauthenticationResolver(e){return C("not implemented")}}async function Wr(n,e){return k(n,"POST","/v1/accounts:update",e)}async function Hr(n,e){return k(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,e){return ce(n,"POST","/v1/accounts:signInWithPassword",U(n,e))}async function nn(n,e){return k(n,"POST","/v1/accounts:sendOobCode",U(n,e))}async function jr(n,e){return nn(n,e)}async function qr(n,e){return nn(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(n,e){return ce(n,"POST","/v1/accounts:signInWithEmailLink",U(n,e))}async function Kr(n,e){return ce(n,"POST","/v1/accounts:signInWithEmailLink",U(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Xe{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new re(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new re(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ve(e,t,"signInWithPassword",$r);case"emailLink":return Br(e,{email:this._email,oobCode:this._password});default:E(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ve(e,r,"signUpPassword",Hr);case"emailLink":return Kr(e,{idToken:t,email:this._email,oobCode:this._password});default:E(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(n,e){return ce(n,"POST","/v1/accounts:signInWithIdp",U(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="http://localhost";class K extends Xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new K(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):E("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const a=new K(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Y(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Y(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Y(e,t)}buildRequest(){const e={requestUri:Gr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=se(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jr(n){const e=ee(te(n)).link,t=e?ee(te(e)).deep_link_id:null,r=ee(te(n)).deep_link_id;return(r?ee(te(r)).link:null)||r||t||e||n}class Qe{constructor(e){const t=ee(te(e)),r=t.apiKey??null,i=t.oobCode??null,s=zr(t.mode??null);l(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Jr(e);try{return new Qe(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(){this.providerId=z.PROVIDER_ID}static credential(e,t){return re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qe.parseLink(t);return l(r,"argument-error"),re._fromEmailAndCode(e,r.code,r.tenantId)}}z.PROVIDER_ID="password";z.EMAIL_PASSWORD_SIGN_IN_METHOD="password";z.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Ce{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x extends ue{constructor(){super("facebook.com")}static credential(e){return K._fromParams({providerId:x.PROVIDER_ID,signInMethod:x.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return x.credentialFromTaggedObject(e)}static credentialFromError(e){return x.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return x.credential(e.oauthAccessToken)}catch{return null}}}x.FACEBOOK_SIGN_IN_METHOD="facebook.com";x.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A extends ue{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return K._fromParams({providerId:A.PROVIDER_ID,signInMethod:A.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return A.credentialFromTaggedObject(e)}static credentialFromError(e){return A.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return A.credential(t,r)}catch{return null}}}A.GOOGLE_SIGN_IN_METHOD="google.com";A.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends ue{constructor(){super("github.com")}static credential(e){return K._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return V.credential(e.oauthAccessToken)}catch{return null}}}V.GITHUB_SIGN_IN_METHOD="github.com";V.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends ue{constructor(){super("twitter.com")}static credential(e,t){return K._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return W.credential(t,r)}catch{return null}}}W.TWITTER_SIGN_IN_METHOD="twitter.com";W.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n,e){return ce(n,"POST","/v1/accounts:signUp",U(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await T._fromIdTokenResponse(e,r,i),a=wt(r);return new G({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=wt(r);return new G({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function wt(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends qe{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pe.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Pe(e,t,r,i)}}function rn(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pe._fromErrorAndOperation(n,s,e,r):s})}async function Xr(n,e,t=!1){const r=await B(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return G._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n,e,t=!1){const{auth:r}=n;if(g(r.app))return Promise.reject(O(r));const i="reauthenticate";try{const s=await B(n,rn(r,i,e,n),t);l(s.idToken,r,"internal-error");const a=be(s.idToken);l(a,r,"internal-error");const{sub:o}=a;return l(n.uid===o,r,"user-mismatch"),G._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&E(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,e,t=!1){if(g(n.app))return Promise.reject(O(n));const r="signIn",i=await rn(n,r,e),s=await G._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Qr(n,e){return an(D(n),e)}async function Zr(n,e){return sn(m(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n){const e=D(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ei(n,e,t){const r=D(n);await ve(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qr)}async function ti(n,e,t){if(g(n.app))return Promise.reject(O(n));const r=D(n),a=await ve(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yr).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&on(n),c}),o=await G._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function ni(n,e,t){return g(n.app)?Promise.reject(O(n)):Qr(m(n),z.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&on(n),r})}async function ri(n,e){const t=m(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:s}=await jr(t.auth,i);s!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n,e){return k(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n,e){const{displayName:t,photoURL:r}=e;if(t===void 0&&r===void 0)return;const i=m(n),a={idToken:await i.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},o=await B(i,ii(i.auth,a));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function si(n,e){return ai(m(n),null,e)}async function ai(n,e,t){const{auth:r}=n,s={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(s.password=t);const a=await B(n,Wr(r,s));await n._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){var i,s;if(!n)return null;const{providerId:e}=n,t=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},r=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(n!=null&&n.idToken)){const a=(s=(i=be(n.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(a){const o=a!=="anonymous"&&a!=="custom"?a:null;return new X(r,o)}}if(!e)return null;switch(e){case"facebook.com":return new ci(r,t);case"github.com":return new ui(r,t);case"google.com":return new li(r,t);case"twitter.com":return new di(r,t,n.screenName||null);case"custom":case"anonymous":return new X(r,null);default:return new X(r,e,t)}}class X{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class un extends X{constructor(e,t,r,i){super(e,t,r),this.username=i}}class ci extends X{constructor(e,t){super(e,"facebook.com",t)}}class ui extends un{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class li extends X{constructor(e,t){super(e,"google.com",t)}}class di extends un{constructor(e,t,r){super(e,"twitter.com",t,r)}}function hi(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:oi(t)}function fi(n,e,t,r){return m(n).onIdTokenChanged(e,t,r)}function pi(n,e,t){return m(n).beforeAuthStateChanged(e,t)}function mi(n,e,t,r){return m(n).onAuthStateChanged(e,t,r)}function gi(n){return m(n).signOut()}async function wi(n){return m(n).delete()}const ke="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ke,"1"),this.storage.removeItem(ke),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1e3,Ii=10;class dn extends ln{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jt(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Pr()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ii):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},_i)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dn.type="LOCAL";const hn=dn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ln{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fn.type="SESSION";const pn=fn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ne(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async u=>u(t.origin,s)),c=await yi(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ne.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const u=Ze("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const _=f;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(_.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return window}function Ti(n){b().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof b().WorkerGlobalScope<"u"&&typeof b().importScripts=="function"}async function vi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pi(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ki(){return mn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="firebaseLocalStorageDb",Si=1,Se="firebaseLocalStorage",wn="fbase_key";class le{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oe(n,e){return n.transaction([Se],e?"readwrite":"readonly").objectStore(Se)}function Ai(){const n=indexedDB.deleteDatabase(gn);return new le(n).toPromise()}function _n(){const n=indexedDB.open(gn,Si);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Se,{keyPath:wn})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Se)?e(r):(r.close(),await Ai(),e(await _n()))})})}async function _t(n,e,t){const r=Oe(n,!0).put({[wn]:e,value:t});return new le(r).toPromise()}async function bi(n,e){const t=Oe(n,!1).get(e),r=await new le(t).toPromise();return r===void 0?null:r.value}function It(n,e){const t=Oe(n,!0).delete(e);return new le(t).toPromise()}const Ri=800,Ci=3;class In{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=_n(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ci)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return mn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ne._getInstance(ki()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await vi(),!this.activeServiceWorker)return;this.sender=new Ei(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await _t(e,ke,"1"),await It(e,ke)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>_t(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>bi(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>It(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=Oe(i,!1).getAll();return new le(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}catch(e){return this.isClosing||pe(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ri)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}In.type="LOCAL";const yn=In;new oe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n,e){return e?N(e):(l(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Y(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Y(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Y(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ni(n){return an(n.auth,new tt(n),n.bypassAuthState)}function Oi(n){const{auth:e,user:t}=n;return l(t,e,"internal-error"),sn(t,new tt(n),n.bypassAuthState)}async function Li(n){const{auth:e,user:t}=n;return l(t,e,"internal-error"),Xr(t,new tt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ni;case"linkViaPopup":case"linkViaRedirect":return Li;case"reauthViaPopup":case"reauthViaRedirect":return Oi;default:E(this.auth,"internal-error")}}resolve(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new oe(2e3,1e4);async function Di(n,e,t){if(g(n.app))return Promise.reject(y(n,"operation-not-supported-in-this-environment"));const r=D(n);Dt(n,e,Ce);const i=et(r,t);return new H(r,"signInViaPopup",e,i).executeNotNull()}async function Mi(n,e,t){const r=m(n);if(g(r.auth.app))return Promise.reject(y(r.auth,"operation-not-supported-in-this-environment"));Dt(r.auth,e,Ce);const i=et(r.auth,t);return new H(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}class H extends En{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,H.currentPopupAction&&H.currentPopupAction.cancel(),H.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return l(e,this.auth,"internal-error"),e}async onExecution(){L(this.filter.length===1,"Popup operations only handle one event");const e=Ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,H.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ui.get())};e()}}H.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="pendingRedirect",we=new Map;class xi extends En{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=we.get(this.auth._key());if(!e){try{const r=await Vi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}we.set(this.auth._key(),e)}return this.bypassAuthState||we.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vi(n,e){const t=$i(e),r=Hi(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Wi(n,e){we.set(n._key(),e)}function Hi(n){return N(n._redirectPersistence)}function $i(n){return ge(Fi,n.config.apiKey,n.name)}async function ji(n,e,t=!1){if(g(n.app))return Promise.reject(O(n));const r=D(n),i=et(r,e),a=await new xi(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=600*1e3;class Bi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ki(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Tn(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(y(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qi&&this.cachedEventUids.clear(),this.cachedEventUids.has(yt(e))}saveEventToCache(e){this.cachedEventUids.add(yt(e)),this.lastProcessedEventTime=Date.now()}}function yt(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tn({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ki(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tn(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n,e={}){return k(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ji=/^https?/;async function Yi(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gi(n);for(const t of e)try{if(Xi(t))return}catch{}E(n,"unauthorized-domain")}function Xi(n){const e=Ve(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ji.test(t))return!1;if(zi.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new oe(3e4,6e4);function Et(){const n=b().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zi(n){return new Promise((e,t)=>{var i,s,a;function r(){Et(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Et(),t(y(n,"network-request-failed"))},timeout:Qi.get()})}if((s=(i=b().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((a=b().gapi)!=null&&a.load)r();else{const o=Lr("iframefcb");return b()[o]=()=>{gapi.load?r():t(y(n,"network-request-failed"))},Xt(`${Or()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw _e=null,e})}let _e=null;function es(n){return _e=_e||Zi(n),_e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new oe(5e3,15e3),ns="__/auth/iframe",rs="emulator/auth/iframe",is={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ss=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function as(n){const e=n.config;l(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Je(e,rs):`https://${n.config.authDomain}/${ns}`,r={apiKey:e.apiKey,appName:n.name,v:ae},i=ss.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${se(r).slice(1)}`}async function os(n){const e=await es(n),t=b().gapi;return l(t,n,"internal-error"),e.open({where:document.body,url:as(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:is,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=y(n,"network-request-failed"),o=b().setTimeout(()=>{s(a)},ts.get());function c(){b().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},us=500,ls=600,ds="_blank",hs="http://localhost";class Tt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fs(n,e,t,r=us,i=ls){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...cs,width:r.toString(),height:i.toString(),top:s,left:a},u=w().toLowerCase();t&&(o=qt(u)?ds:t),$t(u)&&(e=e||hs,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[de,Z])=>`${_}${de}=${Z},`,"");if(vr(u)&&o!=="_self")return ps(e||"",o),new Tt(null);const f=window.open(e||"",o,d);l(f,n,"popup-blocked");try{f.focus()}catch{}return new Tt(f)}function ps(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="__/auth/handler",gs="emulator/auth/handler",ws=encodeURIComponent("fac");async function vt(n,e,t,r,i,s){l(n.config.authDomain,n,"auth-domain-config-required"),l(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ae,eventId:i};if(e instanceof Ce){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",On(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))a[d]=f}if(e instanceof ue){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await n._getAppCheckToken(),u=c?`#${ws}=${encodeURIComponent(c)}`:"";return`${_s(n)}?${se(o).slice(1)}${u}`}function _s({config:n}){return n.emulator?Je(n,gs):`https://${n.authDomain}/${ms}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="webStorageSupport";class Is{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pn,this._completeRedirectFn=ji,this._overrideRedirectResult=Wi}async _openPopup(e,t,r,i){var a;L((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await vt(e,t,r,Ve(),i);return fs(e,s,Ze())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await vt(e,t,r,Ve(),i);return Ti(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(L(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await os(e),r=new Bi(e);return t.register("authEvent",i=>(l(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(De,{type:De},i=>{var a;const s=(a=i==null?void 0:i[0])==null?void 0:a[De];s!==void 0&&t(!!s),E(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jt()||jt()||Ye()}}const He=Is;var Pt="@firebase/auth",kt="1.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){l(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ts(n){at(new ot("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;l(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yt(n)},u=new Rr(r,i,s,c);return Fr(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),at(new ot("auth-internal",e=>{const t=D(e.getProvider("auth").getImmediate());return(r=>new ys(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(Pt,kt,Es(n)),Fe(Pt,kt,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=300,Ps=bt("authIdTokenMaxAge")||vs;let St=null;const ks=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ps)return;const i=t==null?void 0:t.token;St!==i&&(St=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ss(n=Cn()){const e=At(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zt(n,{popupRedirectResolver:He,persistence:[yn,hn,pn]}),r=bt("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=ks(s.toString());pi(t,a,()=>a(t.currentUser)),fi(t,o=>a(o))}}const i=Rn("auth");return i&&en(t,`http://${i}`),t}function As(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Cr({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=y("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",As().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ts("Browser");function bs(n=Nt){return!!(n.apiKey&&n.projectId&&n.appId)}function Rs(n,e="[DEFAULT]",t=""){const r=$n().find(c=>c.name===e),i=r??jn(n,e),s=nt(),a=r?Ss(i):Zt(i,{persistence:typeof window>"u"?Te:[yn,hn,Te].filter(Boolean),...s||typeof window>"u"||!He?{}:{popupRedirectResolver:He}}),o=qn(i);return t&&!r&&(en(a,`http://${t}:9099`,{disableWarnings:!0}),Bn(o,t,8080)),{auth:a,db:o}}function nt(){var n,e;return!!((e=(n=globalThis.Capacitor)==null?void 0:n.isNativePlatform)!=null&&e.call(n))}let fe=null;function Ws(){if(!bs())throw new Error("서버 설정 필요");if(!fe){fe=Rs(Nt,"[DEFAULT]",Zn);const n=fe;Jn((e,t)=>Ns(n,e,t))}return fe}let rt="";function vn(n){rt=n.slice(0,20)}function Cs(){var e,t;const n=(t=(e=globalThis.Capacitor)==null?void 0:e.getPlatform)==null?void 0:t.call(e);return n==="android"||n==="ios"?n:"web"}async function Ns(n,e,t=""){const r=n.auth.currentUser;if(!r)return;const i={type:e,uid:r.uid,name:(rt||r.displayName||"학생").slice(0,20),appVersion:er,platform:Cs(),at:p()};t&&(i.message=t.slice(0,300)),await Kn(I(n.db,"logs"),i)}function Pn(n,e=""){return Promise.race([P(n,e),new Promise(t=>setTimeout(t,1500))])}function Hs(n){const e=(n==null?void 0:n.code)??"",t={"auth/invalid-email":"이메일 형식이 아닙니다.","auth/missing-password":"비밀번호를 넣어 주세요.","auth/weak-password":"비밀번호는 6자 이상이어야 합니다.","auth/email-already-in-use":"이미 가입된 이메일입니다. 로그인을 눌러 주세요.","auth/invalid-credential":"이메일이나 비밀번호가 맞지 않습니다.","auth/wrong-password":"비밀번호가 맞지 않습니다.","auth/user-not-found":"가입되지 않은 이메일입니다.","auth/network-request-failed":"네트워크 오류입니다. 인터넷 연결을 확인하고 다시 해 주세요.","auth/too-many-requests":"시도가 너무 많습니다. 잠시 후 다시 해 주세요.","auth/popup-blocked":"팝업이 막혔습니다. 이메일 로그인을 쓰세요.","auth/operation-not-supported-in-this-environment":"이 앱 화면에서는 Google 로그인이 안 됩니다. 이메일로 로그인하세요.","auth/unauthorized-domain":"이 주소는 Firebase에 등록되지 않았습니다(FIREBASE_SETUP.md 5단계). 이메일 로그인을 쓰세요.","auth/operation-not-allowed":"콘솔에서 이메일 로그인이 꺼져 있어요. Firebase 콘솔 → Authentication → 로그인 방법에서 이메일/비밀번호를 켜 주세요.","auth/missing-email":"이메일을 넣어 주세요.","auth/user-disabled":"사용이 정지된 계정입니다.","auth/invalid-login-credentials":"이메일이나 비밀번호가 맞지 않습니다.","auth/internal-error":"로그인 서버 오류입니다. 잠시 후 다시 해 주세요.","auth/web-storage-unsupported":"이 화면에서는 로그인 정보를 저장할 수 없습니다. 앱을 다시 열어 주세요.","auth/timeout":"서버 응답이 늦습니다. 인터넷 연결을 확인하세요.","auth/requires-recent-login":"보안을 위해 비밀번호를 다시 확인해야 해요.","auth/user-mismatch":"다른 계정의 비밀번호예요.","permission-denied":"권한이 없어요. 앱을 최신으로 업데이트했는지 확인하세요."};return e&&!["auth/invalid-email","auth/missing-password","auth/weak-password","auth/missing-email"].includes(e)&&Yn(n,"auth"),t[e]??`로그인 오류 (${e||(n==null?void 0:n.message)||"알 수 없음"})`}let it="";async function $s(n,e,t,r){it=r.trim();const i=await ti(n.auth,e.trim(),t);return r.trim()&&await cn(i.user,{displayName:r.trim()}),vn(r.trim()),await Os(n).catch(()=>{}),P("signup"),i.user}async function Os(n){const e=n.auth.currentUser;if(!e)throw new Error("로그인이 필요합니다.");n.auth.languageCode="ko",await ri(e)}async function js(n){const e=n.auth.currentUser;if(!e)return!1;await e.reload();const t=n.auth.currentUser;return t!=null&&t.emailVerified&&await t.getIdToken(!0),!!(t!=null&&t.emailVerified)}async function qs(n,e,t){const r=(await ni(n.auth,e.trim(),t)).user;return P("login"),r}async function Bs(n){var t;if(nt())throw Object.assign(new Error("native"),{code:"auth/operation-not-supported-in-this-environment"});const e=await Di(n.auth,new A);return P((t=hi(e))!=null&&t.isNewUser?"signup":"login","google"),e.user}async function Ks(n,e){n.auth.languageCode="ko",await ei(n.auth,e.trim())}function Gs(n,e){return mi(n.auth,e)}async function zs(n){await Pn("logout"),await gi(n.auth),rt=""}function kn(){var r,i;const n="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let e="";const t=new Uint8Array(6);(i=(r=globalThis.crypto)==null?void 0:r.getRandomValues)==null||i.call(r,t);for(let s=0;s<6;s++)e+=n[(t[s]||Math.floor(Math.random()*256))%n.length];return e}async function ie(n,e){const t=await $(h(n.db,"users",e));return t.exists()?{uid:e,...t.data()}:null}const Me=new Map;function Js(n,e){const t=n.auth.currentUser;if(!t)return Promise.reject(new Error("로그인이 필요합니다."));const r=`${n.auth.app.name}:${t.uid}`,i=Me.get(r);if(i)return i;const s=Ls(n,it||e).finally(()=>Me.delete(r));return Me.set(r,s),s}async function Ls(n,e){const t=n.auth.currentUser;if(!t)throw new Error("로그인이 필요합니다.");const r=await ie(n,t.uid);if(r)return r;for(let i=0;i<5;i++){const s=kn();try{return await Be(n.db,async a=>{const o=h(n.db,"codes",s);if((await a.get(o)).exists())throw new Error("code-taken");a.set(o,{uid:t.uid}),a.set(h(n.db,"users",t.uid),{name:e.trim().slice(0,20)||"학생",code:s,phoneHash:"",pet:null,updatedAt:p()})}),it="",{uid:t.uid,name:e.trim().slice(0,20)||"학생",code:s,phoneHash:"",pet:null}}catch(a){if(a.message!=="code-taken")throw a}}throw new Error("친구 코드를 만들지 못했습니다. 다시 시도하세요.")}async function Us(n,e){const t=n.auth.currentUser.uid;await v(h(n.db,"users",t),{name:e.trim().slice(0,20)||"학생",updatedAt:p()})}async function Ys(n,e){const t=n.auth.currentUser.uid,r=await nr(e);if(!r)throw new Error("한국 휴대폰 번호 형식이 아닙니다. 예) 010-1234-5678");const i=await ie(n,t),s=Ke(n.db);i!=null&&i.phoneHash&&i.phoneHash!==r&&s.delete(h(n.db,"phones",i.phoneHash));const a=await $(h(n.db,"phones",r));if(a.exists()&&a.data().uid!==t)throw new Error("이 번호는 다른 계정에 이미 등록되어 있습니다.");return a.exists()||s.set(h(n.db,"phones",r),{uid:t}),s.update(h(n.db,"users",t),{phoneHash:r,updatedAt:p()}),await s.commit(),r}async function Xs(n,e){const t=n.auth.currentUser.uid;await v(h(n.db,"users",t),{pet:e,updatedAt:p()})}async function Qs(n,e){var s;const t=(s=n.auth.currentUser)==null?void 0:s.uid,r=[...new Set(e)].slice(0,500),i=[];for(let a=0;a<r.length;a+=25){const o=r.slice(a,a+25);(await Promise.all(o.map(u=>$(h(n.db,"phones",u)).catch(()=>null)))).forEach((u,d)=>{const f=u!=null&&u.exists()?u.data().uid:"";f&&f!==t&&i.push({hash:o[d],uid:f})})}return i}async function Zs(n,e){const t=await $(h(n.db,"codes",e.trim().toUpperCase()));return t.exists()?t.data().uid:null}async function ea(n,e){const t=n.auth.currentUser.uid;if(e===t)throw new Error("나 자신에게는 보낼 수 없습니다.");const[r,i]=await Promise.all([ie(n,t),ie(n,e)]);if(!i)throw new Error("상대를 찾지 못했습니다.");const s=[t,e].sort().join("_"),a=await $(h(n.db,"friendships",s)).catch(()=>null);if(a!=null&&a.exists())throw new Error("이미 친구입니다.");await Ge(h(n.db,"requests",`${t}_${e}`),{from:t,to:e,fromName:(r==null?void 0:r.name)??"학생",toName:i.name,status:"pending",at:p()}),P("friend_request")}function ta(n,e){const t=n.auth.currentUser.uid;return Q(R(I(n.db,"requests"),S("to","==",t),S("status","==","pending")),r=>e(r.docs.map(i=>({id:i.id,...i.data()}))))}async function na(n,e,t){const r=n.auth.currentUser.uid,i=Ke(n.db);if(i.update(h(n.db,"requests",e.id),{status:t?"accepted":"declined"}),t){const s=[e.from,r].sort();i.set(h(n.db,"friendships",s.join("_")),{members:s,names:{[e.from]:e.fromName,[r]:e.toName},from:e.from,at:p()})}await i.commit(),t&&P("friend_accept")}function ra(n,e){const t=n.auth.currentUser.uid;return Q(R(I(n.db,"friendships"),S("members","array-contains",t)),r=>e(r.docs.map(i=>{var o;const s=i.data(),a=s.members.find(c=>c!==t)??"";return{uid:a,name:((o=s.names)==null?void 0:o[a])??"친구",pairId:i.id}})))}async function ia(n,e,t,r){var c;const i=n.auth.currentUser.uid;if(((c=t[0])==null?void 0:c.uid)!==i)throw new Error("teamA 첫 자리는 나여야 합니다.");const s=[...t,...r];if(!(t.length===1&&r.length===1||t.length===2&&r.length===2))throw new Error("1대1 또는 2대2만 됩니다.");if(new Set(s.map(u=>u.uid)).size!==s.length)throw new Error("같은 사람을 두 번 넣었습니다.");const a=Ot(),o={mode:t.length===2?"2v2":"1v1",host:i,players:s.map(u=>u.uid),team:Object.fromEntries([...t.map(u=>[u.uid,0]),...r.map(u=>[u.uid,1])]),slot:Object.fromEntries([...t.map((u,d)=>[u.uid,d]),...r.map((u,d)=>[u.uid,d])]),names:Object.fromEntries(s.map(u=>[u.uid,u.name])),fighters:Object.fromEntries(s.map(u=>[u.uid,u.uid===i?e:null])),accepted:Object.fromEntries(s.map(u=>[u.uid,u.uid===i])),status:"invite",moves:{},winner:null};return await Ge(h(n.db,"battles",a),{...o,createdAt:p(),updatedAt:p()}),P("battle_create",o.mode),a}function sa(n,e){const t=n.auth.currentUser.uid;return Q(R(I(n.db,"battles"),S("players","array-contains",t)),r=>e(r.docs.map(i=>({id:i.id,...i.data()})).filter(i=>i.status!=="cancelled")))}function aa(n,e,t,r){return Q(h(n.db,"battles",e),i=>t(i.exists()?{id:i.id,...i.data()}:null),i=>r==null?void 0:r(i))}async function oa(n,e,t){const r=n.auth.currentUser.uid;await Be(n.db,async i=>{const s=h(n.db,"battles",e),a=await i.get(s);if(!a.exists())throw new Error("배틀이 없습니다.");const o=a.data();if(o.status!=="invite")throw new Error("이미 시작했거나 끝난 배틀입니다.");const c={...o.accepted,[r]:!0},u=o.players.every(d=>c[d]);i.update(s,{[`fighters.${r}`]:t,[`accepted.${r}`]:!0,...u?{status:"active"}:{},updatedAt:p()})})}async function ca(n,e){await v(h(n.db,"battles",e),{status:"cancelled",updatedAt:p()})}function Ds(n,e){return`${n.team[e]}-${n.slot[e]}`}function ua(n){const e=i=>n.players.filter(s=>n.team[s]===i).sort((s,a)=>n.slot[s]-n.slot[a]).map(s=>n.fighters[s]).filter(s=>!!s);let t=Xn(n.id,e(0),e(1));const r=Object.fromEntries(n.players.map(i=>[Ds(n,i),i]));for(let i=0;;i++){const s=Object.fromEntries(n.players.map(u=>{var d,f;return[u,(f=(d=n.moves)==null?void 0:d[u])==null?void 0:f[String(i)]]})),a=[...t.teams[0],...t.teams[1]].filter(u=>u.hp>0),o=a.filter(u=>!s[r[u.key]]).map(u=>r[u.key]);if(o.length>0||t.winner!==null)return{state:t,pendingTurn:i,waitingFor:t.winner!==null?[]:o};const c=Object.fromEntries(a.map(u=>[u.key,s[r[u.key]]]));t=Qn(t,[c])}}async function la(n,e,t,r){const i=n.auth.currentUser.uid;await v(h(n.db,"battles",e.id),{[`moves.${i}.${t}`]:r,updatedAt:p()})}async function da(n,e,t){e.status!=="done"&&(await v(h(n.db,"battles",e.id),{status:"done",winner:t,updatedAt:p()}),P("battle_finish",`${e.mode} winner=${t}`))}async function ha(n,e){return(await j(I(n.db,e))).size}async function fa(n,e){const t=e.trim().slice(0,20);if(!t)throw new Error("닉네임을 넣어 주세요.");return await Us(n,t),n.auth.currentUser&&await cn(n.auth.currentUser,{displayName:t}),vn(t),t}function Ms(n){return n.providerData.some(e=>e.providerId==="password")}async function Sn(n,e){const t=n.auth.currentUser;if(!t)throw new Error("로그인이 필요합니다.");if(Ms(t)){if(!e)throw Object.assign(new Error("pw"),{code:"auth/missing-password"});await Zr(t,z.credential(t.email??"",e))}else{if(nt())throw Object.assign(new Error("native"),{code:"auth/operation-not-supported-in-this-environment"});await Mi(t,new A)}return t}async function pa(n,e,t){if(t.length<6)throw Object.assign(new Error("weak"),{code:"auth/weak-password"});const r=await Sn(n,e);await si(r,t)}async function ma(n,e){const t=await Sn(n,e),r=t.uid;await Pn("account_delete");const i=[],s=o=>o.docs.forEach(c=>i.push(c.ref));s(await j(I(n.db,"users",r,"data"))),s(await j(R(I(n.db,"shares"),S("owner","==",r)))),s(await j(R(I(n.db,"requests"),S("from","==",r)))),s(await j(R(I(n.db,"requests"),S("to","==",r)))),s(await j(R(I(n.db,"friendships"),S("members","array-contains",r))));const a=await ie(n,r);a!=null&&a.phoneHash&&i.push(h(n.db,"phones",a.phoneHash)),a!=null&&a.code&&i.push(h(n.db,"codes",a.code));for(let o=0;o<i.length;o+=400){const c=Ke(n.db);i.slice(o,o+400).forEach(u=>c.delete(u)),await c.commit()}for(const o of["duels","battles"]){const c=await j(R(I(n.db,o),S("players","array-contains",r))).catch(()=>null);for(const u of(c==null?void 0:c.docs)??[])["invite","active"].includes(u.data().status)&&await v(u.ref,{status:"cancelled",updatedAt:p()}).catch(()=>{})}await Ct(h(n.db,"users",r)),await wi(t)}function ga(n){return{v:1,title:n.title,kind:n.kind,rubric:n.rubric,prompt:n.prompt,answer:n.answer,items:n.items.map(({text:e,cue:t})=>({text:e,cue:t})),rubricMap:n.rubricMap,tips:n.tips}}async function wa(n,e,t,r=""){var o;const i=(o=n.auth.currentUser)==null?void 0:o.uid;if(!i)throw new Error("로그인이 필요합니다.");const s=JSON.stringify(e);if(s.length>2e5)throw new Error("너무 길어서 공유할 수 없습니다.");const a={owner:i,ownerName:t.slice(0,20),title:e.title.slice(0,80),data:s};if(r){const c=await $(h(n.db,"shares",r)).catch(()=>null);if(c!=null&&c.exists()&&c.data().owner===i)return await v(h(n.db,"shares",r),{...a,updatedAt:p()}),r}for(let c=0;c<6;c++){const u=kn();try{return await Be(n.db,async d=>{const f=h(n.db,"shares",u);if((await d.get(f)).exists())throw new Error("code-taken");d.set(f,{...a,createdAt:p(),updatedAt:p()})}),P("share_create"),u}catch(d){if(d.message!=="code-taken")throw d}}throw new Error("공유 코드를 만들지 못했습니다. 다시 해 주세요.")}async function _a(n,e){const t=e.trim().toUpperCase();if(!/^[A-Z0-9]{6}$/.test(t))throw new Error("공유 코드는 영문·숫자 6자리예요.");const r=await $(h(n.db,"shares",t));if(!r.exists())throw new Error("이 코드의 수행평가가 없어요. 코드를 확인하세요.");const i=r.data(),s=JSON.parse(i.data);if(!s||!Array.isArray(s.items))throw new Error("공유 내용이 올바르지 않아요.");return{ownerName:i.ownerName||"친구",project:s}}async function Ia(n,e){await Ct(h(n.db,"shares",e))}async function ya(n,e,t,r){const i=n.auth.currentUser.uid;if(t.uid===i)throw new Error("나 자신과는 대결할 수 없어요.");const s=Math.floor(Math.random()*2**31),a=Gn(s,r);if(a.length<zn)throw new Error("문제가 모자라요. 다른 과목을 고르세요.");const o=Ot();return await Ge(h(n.db,"duels",o),{host:i,players:[i,t.uid],names:{[i]:e,[t.uid]:t.name},subject:r,seed:s,qids:a,status:"invite",answers:{},createdAt:p(),updatedAt:p()}),P("duel_create",r),o}function Ea(n,e){const t=n.auth.currentUser.uid;return Q(R(I(n.db,"duels"),S("players","array-contains",t)),r=>e(r.docs.map(i=>({id:i.id,...i.data()})).filter(i=>i.status!=="cancelled")))}function Ta(n,e,t,r){return Q(h(n.db,"duels",e),i=>t(i.exists()?{id:i.id,...i.data()}:null),i=>r==null?void 0:r(i))}async function va(n,e){await v(h(n.db,"duels",e),{status:"active",updatedAt:p()})}async function Pa(n,e,t,r,i){const s=n.auth.currentUser.uid;await v(h(n.db,"duels",e.id),{[`answers.${s}.${t}`]:{c:r,ms:Math.min(tr,Math.max(0,Math.round(i))),at:p()},updatedAt:p()})}async function ka(n,e){await v(h(n.db,"duels",e),{status:"done",updatedAt:p()}),P("duel_finish")}async function Sa(n,e){await v(h(n.db,"duels",e),{status:"cancelled",updatedAt:p()})}async function Aa(n){const e=await $(h(n.db,"meta","app"));if(!e.exists())return null;const t=e.data();return typeof t.latestVersionCode!="number"||typeof t.apkUrl!="string"?null:{latestVersionCode:t.latestVersionCode,versionName:String(t.versionName??""),apkUrl:t.apkUrl,notes:String(t.notes??"")}}export{oa as acceptBattle,va as acceptDuel,na as answerRequest,ca as cancelBattle,Sa as cancelDuel,pa as changePassword,ia as createBattleDoc,ya as createDuel,Ws as ctx,ma as deleteAccount,Ia as deleteShare,Js as ensureProfile,Ds as fighterKey,Zs as findByCode,Qs as findByHashes,da as finishBattle,ka as finishDuel,Hs as friendlyAuthError,Aa as getAppMeta,ie as getProfile,bs as isConfigured,ha as listDocs,zs as logOut,Rs as makeCtx,Cs as platformName,_a as readShare,js as refreshVerified,Ks as resetPassword,wa as saveShare,ea as sendRequest,Os as sendVerification,Xs as setBattlePet,vn as setLogName,Ys as setPhone,ga as sharePayload,qs as signInEmail,Bs as signInGoogle,$s as signUpEmail,ua as stateOf,Pa as submitDuelAnswer,la as submitMove,Us as updateName,fa as updateNickname,aa as watchBattle,Ta as watchDuel,ra as watchFriends,ta as watchIncoming,sa as watchMyBattles,Ea as watchMyDuels,Gs as watchUser,Ns as writeLog};
