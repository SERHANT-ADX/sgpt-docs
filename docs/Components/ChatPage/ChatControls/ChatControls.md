The `ChatControls` component is responsible for rendering and managing the input controls for sending and regenerating
messages in a chat interface.

#### Component Overview

The `ChatControls` component provides a form interface for sending and regenerating messages in a chat. It uses
the `formik` library for form management and integrates with the `useChatPage` custom hook to access chat-related
functions and data.

**Important!** You can use this component only within ChatPageProvider Component

#### Component Structure

The `ChatControls` component is structured as follows:

1. **Private Definitions**

   ```jsx static
   const defaultOptions = {
   	loop: true,
   	autoplay: true,
   	animationData: generatingSmallAnimation,
   	rendererSettings: {
   		preserveAspectRatio: 'xMidYMid slice',
   	},
   };
   ```

   This object defines animation options for the Lottie animation that plays while a response is being regenerated.

2. **ChatControls Component**

   ```jsx static
   const ChatControls = () => {
   	// Hooks
   	const { handleSendMessage, isMessageLoading, handleRegenerateMessage, activeChatThread } = useChatPage();

   	// Statics
   	const initialFormValues = {
   		prompt: '',
   	};

   	// Handlers
   	const handleSubmitSending = useCallback(
   		(values, setFieldValue) => {
   			handleSendMessage(values.prompt);
   			setFieldValue('prompt', '');
   		},
   		[handleSendMessage],
   	);

   	const formik = useFormik({
   		initialValues: initialFormValues,
   		validationSchema: sendingChatRequestValidation,
   		onSubmit: (values) => handleSubmitSending(values, formik.setFieldValue),
   	});

   	const { handleSubmit, handleChange, values, errors } = formik;

   	const handleKeyDown = useCallback(
   		(event) => {
   			if (event.key === 'Enter') {
   				event.preventDefault();
   				handleSubmit();
   			}
   		},
   		[handleSubmit],
   	);

   	// JSX Rendering
   	return (
   		<form
   			onSubmit={handleSubmit}
   			style={sx.chatControls}
   		>
   			<Button
   				sx={
   					isMessageLoading ? { ...sx.regenerateResponseButton, alignItems: 'center' } : sx.regenerateResponseButton
   				}
   				disabled={isMessageLoading || !activeChatThread}
   				onClick={handleRegenerateMessage}
   				endIcon={
   					isMessageLoading ? (
   						<Lottie
   							options={defaultOptions}
   							height={30}
   							width={30}
   						/>
   					) : (
   						<RegenerateResponseIcon />
   					)
   				}
   			>
   				Regenerate response
   			</Button>
   			<TextField
   				name="prompt"
   				value={values.prompt}
   				onChange={handleChange}
   				multiline
   				sx={sx.newMessageInput.sx}
   				inputProps={sx.newMessageInput.inputProps}
   				onKeyDown={handleKeyDown}
   				placeholder="Type your question here..."
   				rows={5}
   				variant="outlined"
   			/>
   			<Tooltip title="Send">
   				<IconButton
   					sx={sx.sendMessageButton}
   					style={{ ...((isMessageLoading || !!errors?.prompt) && { opacity: '60%' }) }}
   					type="submit"
   					disabled={isMessageLoading || !!errors?.prompt}
   				>
   					<img
   						src={sendMessageIcon}
   						alt="send"
   					/>
   				</IconButton>
   			</Tooltip>
   		</form>
   	);
   };
   ```

#### Props

The `ChatControls` component does not receive any props directly.

#### Hooks and Functions

- **Hooks Used:**

  - `useChatPage`: Custom hook for accessing chat-related functions and data.

- **Functions Used:**
  - `handleSendMessage`: Function to send a chat message.
  - `isMessageLoading`: Boolean indicating if a message is currently being sent.
  - `handleRegenerateMessage`: Function to regenerate a chat message.
  - `handleSubmitSending`: Callback function to handle form submission for sending messages.
  - `formik.setFieldValue`: Formik function to set field values.

#### Statics

- **`initialFormValues`**:
  Initial values for the form fields managed by Formik.

#### Handlers

- **`handleSubmitSending(values, setFieldValue)`**:
  Callback function triggered when the form is submitted. Calls the `handleSendMessage` function to send the message and
  clears the input field value.

- **`handleKeyDown(event)`**:
  Event handler triggered when a key is pressed. If the Enter key is pressed, it prevents the default action and
  triggers the form submission.

#### JSX Rendering

The `ChatControls` component returns a JSX structure that represents the input controls for sending and regenerating
messages in a chat. It includes buttons for regenerating responses and sending messages, as well as an input field for
entering messages.

#### Export

The `ChatControls` component is exported as a memoized component using the `memo` function.

---

This documentation provides an in-depth understanding of the `ChatControls` component, its structure, functionality,
hooks used, functions, handlers, and more.
